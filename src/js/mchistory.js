const changeURL = (url) => {
    if (history.pushState) {
        window.history.pushState("", "", url);
    } else {
        document.location.href = url;
    }
}

const mchistory = new Vue({
    el: '#mchistory',
    data: () => {
        return {
            status: null,
            form: true,
            query_uuid: null,
            user: {
                nick: null,
                uuid: null,
                full_uuid: null,
                query_time: null,
                skin: null,
                history: null
            }
        }
    },
    methods: {
        onSubmit: () => {
            if(mchistory.form == true) {
                mchistory.form = false;
                mchistory.user.nick = null;
                mchistory.user.uuid = null;
                mchistory.user.full_uuid = null;
                mchistory.user.query_time = null;
                mchistory.user.skin = null;
                mchistory.user.history = null;
                console.log(mchistory.query_uuid);

                if(mchistory.query_uuid) {
                    changeURL('/minecraft/history?'+encodeURIComponent(mchistory.query_uuid+document.location.hash));
                        try {
                            console.log('ajax start');
                            $.ajax({
                                url: 'https://mcapi.mori.space/history/'+mchistory.query_uuid,
                                dataType: 'jsonp',
                                beforeSend: () => {
                                    mchistory.status = 'searching';
                                    mchistory.form = false;
                                },
                                success: (data) => {
                                    if(data.error != true) {
                                        console.log('ajax success');
                                        console.log('user found');
                                        console.log(data);
                                        mchistory.user.nick = data.history[data.history.length - 1].name;
                                        mchistory.user.uuid = data.uuid;
                                        mchistory.user.full_uuid = data.full_uuid;
                                        mchistory.user.history = data.history;
                                        mchistory.user.skin = 'https://crafatar.com/renders/body/'+mchistory.user.uuid+'?&default=MHF_Alex&overlay';

                                        let date = moment.unix(data.query_time);

                                        mchistory.user.query_time = date.format('YYYY.MM.D. HH:mm:ss');

                                        mchistory.status = true;
                                    } else {
                                        console.log('ajax success');
                                        console.log('user not found');
                                        mchistory.status = false;
                                    }
                                },
                                error: (err) => {
                                    console.log('error');
                                    mchistory.status = 'error';
                                },
                                complete: () => {
                                    mchistory.form = true;
                                    setTimeout(()=> {
                                        $('#input').focus();
                                        console.log('focused');
                                    }, 300);
                                }
                            });
                        } catch(e) {
                            console.log('error');
                            mchistory.form = true;
                            mchistory.status = 'error';
                            setTimeout(()=> {
                                $('#input').focus();
                                console.log('focused');
                            }, 300);
                        }
                } else {
                    changeURL('/minecraft/history');
                    console.log('query uuid is null');
                    mchistory.form = true;
                    mchistory.status = 'uuid_null';
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
        if(mchistory.form == true) {
            console.log(regex[1]);
            mchistory.query_uuid = regex[1];
            mchistory.onSubmit();
        }
    }
});