const changeURL = (url) => {
    if (history.pushState) {
        window.history.pushState("", "", url);
    } else {
        document.location.href = url;
    }
}

const app = new Vue({
    el: '#app',
    data: () => {
        return {
            status: null,
            form: true,
            query: null,
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
            if(app.form == true) {
                app.form = false;
                app.user.nick = null;
                app.user.uuid = null;
                app.user.full_uuid = null;
                app.user.query_time = null;
                console.log(app.query);

                if(app.query) {
                    changeURL('/minecraft/nick?'+url('query').replace('&query='+url('?query'), '')+'&query='+
                        app.query+(typeof url('hash') != 'undefined' ? '#'+url('hash') : ''));
                        try {
                            console.log('ajax start');
                            $.ajax({
                                url: 'https://mcapi.mori.space/nick/'+app.query,
                                dataType: 'jsonp',
                                beforeSend: () => {
                                    app.status = 'searching';
                                    app.form = false;
                                },
                                success: (data) => {
                                    if(data.error != true) {
                                        console.log('ajax success');
                                        console.log('user found');
                                        console.log(data);
                                        app.user.nick = data.nick;
                                        app.user.uuid = data.uuid;
                                        app.user.full_uuid = data.full_uuid;

                                        let date = moment.unix(data.query_time);

                                        app.user.query_time = date.format('YYYY.MM.D. HH:mm:ss');

                                        app.status = true;
                                    } else {
                                        console.log('ajax success');
                                        console.log('user not found');
                                        app.status = false;
                                    }
                                },
                                error: (err) => {
                                    console.log('error');
                                    app.status = 'error';
                                },
                                complete: () => {
                                    app.form = true;
                                    setTimeout(()=> {
                                        $('#input').focus();
                                        console.log('focused');
                                    }, 300);
                                }
                            });
                        } catch(e) {
                            console.log('error');
                            app.form = true;
                            app.status = 'error';
                            setTimeout(()=> {
                                $('#input').focus();
                                console.log('focused');
                            }, 300);
                        }
                } else {
                    changeURL('/minecraft/nick?'+url('query').replace('&query='+url('?query'), '')+
                        (typeof url('hash') != 'undefined' ? '#'+url('hash') : ''));
                    console.log('query nick is null');
                    app.form = true;
                    app.status = 'nick_null';
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
    let query = url('?query')
    if(typeof query != 'undefined') {
        if(app.form == true) {
            console.log(query);
            app.query = query;
            app.onSubmit();
        }
    }
});