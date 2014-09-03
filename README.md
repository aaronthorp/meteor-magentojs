node-magentojs v0.0.3
=====================

An integration module for accepting payments through the eWay gateway. 

More information can be found about the interface here: `https://github.com/mayconheerdt/MagentoJS`


How to install
==============

`mrt add aaronthorp:magentojs`

How to use
==========

```
var magento = MagentoJS({
  host: 'www.magentosite.com',
  port: 80,
  path: '/index.php/api/xmlrpc',
  login: 'test',
  pass: 'pass'
});
magento.init(function(err) {
  magento.sales_order.info('500000001', function(err,order) { console.log(order); });
});
```

License
=======

MIT

### Donating
By donating you are supporting this package and its developer so that he may continue to bring you updates to this and other software he maintains.

[![Support us via Gittip][gittip-badge]][aaronthorp]

[gittip-badge]: https://raw.github.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[aaronthorp]: https://www.gittip.com/aaronthorp/
