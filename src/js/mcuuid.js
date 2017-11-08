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
                console.log(app.query);

                if(app.query) {
                    changeURL('/minecraft/uuid/'+app.query+'/'+(url('query') ? '?'+url('query') : '')+
                    (url('hash') ? url('hash') : ''));
                        try {
                            console.log('ajax start');
                            $.ajax({
                                url: 'https://mcapi.mori.space/uuid/'+app.query,
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
                    changeURL('/minecraft/uuid/'+(url('query') ? '?'+url('query') : '')+
                        (url('hash') ? url('hash') : ''));
                    console.log('query uuid is null');
                    app.form = true;
                    app.status = 'uuid_null';
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