// 测试
const $ = new Env(`欧本流量查询`);
$.ouben_dev_no = $.getdata("ouben_dev_no");
(async () => {
    $.msg(`测试成功：` + $.ouben_dev_no);
    $.done();
})();