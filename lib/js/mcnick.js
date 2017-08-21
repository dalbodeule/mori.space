const changeURL = (url) => {
    if (history.pushState) {
        window.history.pushState("", "", url);
    } else {
        document.location.href = url;
    }
}

const mcnick = new Vue({
    el: '#mcnick',
    data: () => {
        return {
            status: null,
            form: true,
            query_nick: null,
            user: {
                nick: null,
                uuid: null,
                full_uuid: null,
                query_time: null,
                skin: null
            }
        }
    },
    methods: {
        onSubmit: () => {
            if(mcnick.form == true) {
                mcnick.form = false;
                mcnick.user.nick = null;
                mcnick.user.uuid = null;
                mcnick.user.full_uuid = null;
                mcnick.user.query_time = null;
                console.log(mcnick.query_nick);

                if(mcnick.query_nick) {
                    changeURL('/minecraft/nick?'+encodeURIComponent(mcnick.query_nick+document.location.hash));
                        try {
                            console.log('ajax start');
                            $.ajax({
                                url: 'https://mcapi.mori.space/nick/'+mcnick.query_nick,
                                dataType: 'jsonp',
                                beforeSend: () => {
                                    mcnick.status = 'searching';
                                    mcnick.form = false;
                                },
                                success: (data) => {
                                    if(data.error != true) {
                                        console.log('ajax success');
                                        console.log('user found');
                                        console.log(data);
                                        mcnick.user.nick = data.nick;
                                        mcnick.user.uuid = data.uuid;
                                        mcnick.user.full_uuid = data.full_uuid;

                                        let date = moment.unix(data.query_time);

                                        mcnick.user.query_time = date.format('YYYY.MM.D. HH:mm:ss');

                                        mcnick.status = true;
                                    } else {
                                        console.log('ajax success');
                                        console.log('user not found');
                                        mcnick.status = false;
                                    }
                                },
                                error: (err) => {
                                    console.log('error');
                                    mcnick.status = 'error';
                                },
                                complete: () => {
                                    mcnick.form = true;
                                    setTimeout(()=> {
                                        $('#input').focus();
                                        console.log('focused');
                                    }, 300);
                                }
                            });
                        } catch(e) {
                            console.log('error');
                            mcnick.form = true;
                            mcnick.status = 'error';
                            setTimeout(()=> {
                                $('#input').focus();
                                console.log('focused');
                            }, 300);
                        }
                } else {
                    changeURL('/minecraft/nick');
                    console.log('query nick is null');
                    mcnick.form = true;
                    mcnick.status = 'nick_null';
                    setTimeout(()=> {
                        $('#input').focus();
                        console.log('focused');
                    }, 300);
                }
            }
        }
    }
});

$(document).ready(() => {
    console.log('ready');
    let regex = decodeURIComponent(window.location.href).match(/https?:\/\/.*\?([a-zA-Z0-9\_\-]+)/);
    if(regex != null) {
        if(mcnick.form == true) {
            console.log(regex[1]);
            mcnick.query_nick = regex[1];
            mcnick.onSubmit();
        }
    }
});