// 计算加载时间
function getPerformanceTiming () { 
    var performance = window.performance;
  
    if (!performance) {
        // 当前浏览器不支持
        return;
    }
  
    var t = performance.timing;
    var times = {};
  
    //页面加载完成的时间
    times.loadPage = t.loadEventEnd - t.navigationStart;
  
    //【重要】解析 DOM 树结构的时间
    times.domReady = t.domComplete - t.responseEnd;
  
    //【重要】重定向的时间
    times.redirect = t.redirectEnd - t.redirectStart;
  
    //【重要】DNS 查询时间       
    times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;
  
    //【重要】读取页面第一个字节的时间
    // TTFB 即 Time To First Byte
    times.ttfb = t.responseStart - t.navigationStart;

    // 请求响应耗时 网络请求耗时 
    times.response = t.responseStart -t.requestStart

    // DOM解析耗时 DOM 解析耗时 
    times.DOMresolve = t.domInteractive - t.responseEnd

    // 内容传输耗时 TCP 连接耗时 
    times.tcpConnect = t.responseEnd - t.responseStart

    // 资源加载耗时 资源加载耗时 
    times.resource = t.loadEventStart - t.domContentLoadedEventEnd

    // DOM_READY耗时 DOM阶段渲染耗时 
    times.domRender = t.domContentLoadedEventEnd - t.fetchStart

    // 首次渲染耗时 首次渲染时间/白屏时间 
    times.ft = t.responseEnd - t.fetchStart 

    // 首次可交互耗时 首次可交互时间 (First interactivity)
    times.fi = t.domInteractive - t.fetchStart 

    // 首包时间耗时 首包时间 
    times.firstPackage = t.responseStart - t.domainLookupStart 

    // 页面完全加载耗时 页面完全加载时间 
    times.pageLoader = t.loadEventStart - t.fetchStart 
    
    // SSL连接耗时 SSL安全连接耗时 
    times.sslConnect  = t.connectEnd - t.secureConnectionStart 
    
    //【重要】内容加载完成的时间
    times.request = t.responseEnd - t.requestStart;
  
    //【重要】执行 onload 回调函数的时间
    //【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？
    times.loadEvent = t.loadEventEnd - t.loadEventStart;
  
    // DNS 缓存时间
    times.appcache = t.domainLookupStart - t.fetchStart;
  
    // 卸载页面的时间
    times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;
  
    // TCP 建立连接完成握手的时间(TCP连接耗时)
    times.connect = t.connectEnd - t.connectStart;
  
    return times;
}