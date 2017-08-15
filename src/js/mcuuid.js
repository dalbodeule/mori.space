const changeURL = (url) => {
    if (history.pushState) {
        window.history.pushState("", "", url);
    } else {
        document.location.href = url;
    }
}

const mcuuid = new Vue({
    el: '#mcuuid',
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
                skin: null
            }
        }
    },
    methods: {
        onSubmit: () => {
            if(mcuuid.form == true) {
                mcuuid.form = false;
                mcuuid.user.nick = null;
                mcuuid.user.uuid = null;
                mcuuid.user.full_uuid = null;
                mcuuid.user.query_time = null;
                mcuuid.user.skin = null;
                console.log(mcuuid.query_uuid);

                if(mcuuid.query_uuid) {
                    changeURL('/minecraft/uuid?'+mcuuid.query_uuid+document.location.hash);
                        try {
                            console.log('ajax start');
                            $.ajax({
                                url: 'https://mcapi.mori.space/uuid/'+mcuuid.query_uuid,
                                dataType: 'jsonp',
                                beforeSend: () => {
                                    mcuuid.status = 'searching';
                                    mcuuid.form = false;
                                },
                                success: (data) => {
                                    if(data.error != true) {
                                        console.log('ajax success');
                                        console.log('user found');
                                        console.log(data);
                                        mcuuid.user.nick = data.nick;
                                        mcuuid.user.uuid = data.uuid;
                                        mcuuid.user.full_uuid = data.full_uuid;
                                        mcuuid.user.skin = 'https://crafatar.com/renders/body/'+mcuuid.user.uuid+'?&default=MHF_Alex&overlay';

                                        let date = moment.unix(data.query_time);

                                        mcuuid.user.query_time = date.format('YYYY.MM.D. HH:mm:ss');

                                        mcuuid.status = true;
                                    } else {
                                        console.log('ajax success');
                                        console.log('user not found');
                                        mcuuid.status = false;
                                    }
                                },
                                error: (err) => {
                                    console.log('error');
                                    mcuuid.status = 'error';
                                },
                                complete: () => {
                                    mcuuid.form = true;
                                    setTimeout(()=> {
                                        $('#input').focus();
                                    }, 300);
                                    
                                }
                            });
                        } catch(e) {
                            console.log('error');
                            mcuuid.form = true;
                            mcuuid.status = 'error';
                            setTimeout(()=> {
                                $('#input').focus();
                                console.log('focused');
                            }, 300);
                        }
                } else {
                    changeURL('/minecraft/uuid');
                    console.log('query uuid is null');
                    mcuuid.form = true;
                    mcuuid.status = 'uuid_null';
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
    let regex = window.location.href.match(/https?:\/\/.*\?([a-zA-Z0-9\_]+)/);
    if(regex != null) {
        if(mcuuid.form == true) {
            console.log(regex[1]);
            mcuuid.query_uuid = regex[1];
            mcuuid.onSubmit();
        }
    }
});