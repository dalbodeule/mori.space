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
            mcnick.form = false;
            mcnick.user.nick = null;
            mcnick.user.uuid = null;
            mcnick.user.full_uuid = null;
            mcnick.user.query_time = null;
            mcnick.user.skin = null;

            if(mcnick.query_nick != null) {
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
                                mcnick.user.skin = 'https://crafatar.com/renders/body/'+mcnick.user.uuid+'?&default=MHF_Alex&overlay';

                                let date = moment.unix(data.query_time);

                                mcnick.user.query_time = date.format('YYYY.MM.d. HH:mm:ss');

                                mcnick.form = true;
                                mcnick.status = true;
                            } else {
                                console.log('ajax success');
                                console.log('user not found');
                                mcnick.form = true;
                                mcnick.status = false;
                            }
                        },
                        error: (err) => {
                            console.log('error');
                            mcnick.from = true;
                            mcnick.status = 'error';
                        }
                    });
                } catch(e) {
                    console.log('error');
                    mcnick.from = true;
                    mcnick.status = 'error';
                }
            } else {
                console.log('query nick is null');
                mcnick.status = 'nick_null';
            }
        }
    }
});