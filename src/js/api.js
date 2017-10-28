window.$ = window.jQuery = require("jquery");

$(document).ready(() => {
    let res_success_nick = '{"uuid":"2e45712e3747428094cb1d39fe7ee434","full_uuid":"2e45712e-3747-4280-94cb-1d39fe7ee434","nick":"small_sunshine","query":"small_sunshine","query_time":1502880710,"cached":false}';
    let res_error_nick = '{"error":true,"type":"unregistered nickname","query":"test125","cached":true,"expire":295}';
    let res_success_uuid = '{"uuid":"2e45712e3747428094cb1d39fe7ee434","full_uuid":"2e45712e-3747-4280-94cb-1d39fe7ee434","nick":"small_sunshine","query":"2e45712e3747428094cb1d39fe7ee434","query_time":1502884804,"cached":false}';
    let res_error_uuid = '{"error":true,"type":"unregistered uuid","query":"2e45712e3747428094cb1d39fe7ee435","cached":false}';
    let res_success_history = '{"uuid":"2e45712e3747428094cb1d39fe7ee434","full_uuid":"2e45712e-3747-4280-94cb-1d39fe7ee434","history":[{"name":"BJ_Pain"},{"name":"trusty_people","changedToAt":1466824358000},{"name":"small_sunshine","changedToAt":1497515048000}],"query":"2e45712e3747428094cb1d39fe7ee434","query_time":1502884865,"cached":false}';
    let res_error_history = '{"error":true,"type":"unregistered uuid","query":"2e45712e3747428094cb1d39fe7ee435","cached":false}';

    $('#res-success-nick').jJsonViewer(res_success_nick);
    $('#res-error-nick').jJsonViewer(res_error_nick);
    $('#res-success-uuid').jJsonViewer(res_success_uuid);
    $('#res-error-uuid').jJsonViewer(res_error_uuid);
    $('#res-success-history').jJsonViewer(res_success_history);
    $('#res-error-history').jJsonViewer(res_error_history);
});