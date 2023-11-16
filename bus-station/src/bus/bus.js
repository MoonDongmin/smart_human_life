var xhr = new XMLHttpRequest();
var url = 'http://openapitraffic.daejeon.go.kr/api/rest/busposinfo/getBusPosByRtid'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'p59DAKa%2BZOFAsSUuUPFMwDLTsT88xNBSf%2BvrImxASe%2FcMklNlmhBj65wjDRVcfQuUvxVr%2F9SU7VsClIIEVxxMQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('busRouteId') + '=' + encodeURIComponent('30300001'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');