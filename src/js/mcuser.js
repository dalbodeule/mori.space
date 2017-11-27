import Vue from 'vue';
require('js-url');
const moment = require('moment');

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
            queryType: null,
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
            'use strict';
            if(app.form == true) {
                app.form = false;
                app.user.nick = null;
                app.user.uuid = null;
                app.user.full_uuid = null;
                app.user.query_time = null;
                app.user.queryType = null;
                console.log(app.query);

                if(app.query) {
                    if(/^[a-zA-Z0-9\_]{4,16}$/.test(app.query)) app.user.queryType = 'nick';
                    else if(/^([a-z0-9]{32}|[a-z0-9]{8}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{12})$/
                        .test(app.query)) app.user.queryType = 'uuid';
                    else {
                        changeURL('/minecraft/user/'+(url('query') ? '?'+url('query') : '')+
                            (url('hash') ? url('hash') : ''));
                        console.log('query user is not user');
                        app.form = true;
                        app.status = 'not_user';
                        setTimeout(()=> {
                            $('#input').focus();
                            console.log('focused');
                        }, 300);
                    }
                    changeURL('/minecraft/user/'+app.query+'/'+(url('query') ? '?'+url('query') : '')+
                        (url('hash') ? url('hash') : ''));
                        try {
                            let url;
                            if(app.user.queryType == 'nick') url = 'https://mcapi.mori.space/nick/'+app.query;
                            else if(app.user.queryType == 'uuid') url = 'https://mcapi.mori.space/uuid/'+app.query
                            console.log(app.user.queryType);
                            console.log('ajax start');
                            $.ajax({
                                url: url,
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
                    changeURL('/minecraft/user/'+(url('query') ? '?'+url('query') : '')+
                        (url('hash') ? url('hash') : ''));
                    console.log('query user is null');
                    app.form = true;
                    app.status = 'user_null';
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
    let query = $('#query').text();
    if(query) {
        if(app.form == true) {
            console.log(query);
            app.query = query;
            app.onSubmit();
        }
    }
});