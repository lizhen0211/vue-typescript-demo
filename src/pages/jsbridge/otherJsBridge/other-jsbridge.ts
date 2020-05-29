import {Component, Vue} from "vue-property-decorator";

@Component
export default class OtherJsBridge extends Vue {
    constructor() {
        super();
        this.connectWebViewJavascriptBridge(function (bridge: any) {
            console.log("connectWebViewJavascriptBridge");
            bridge.init(function (message: string, responseCallback: Function) {
                console.log('JS got a message', message);
                var data = {
                    'Javascript Responds': '测试中文!'
                };

                if (responseCallback) {
                    console.log('JS responding with', data);
                    responseCallback(data);
                }
            });

            bridge.registerHandler("functionInJs", function (data: string, responseCallback: Function) {
                // @ts-ignore
                // document.getElementById("show").innerHTML = ("data from Java: = " + data);
                console.log("data from Java: = " + data);
                if (responseCallback) {
                    console.log("call registerHandler responseCallback");
                    var responseData = "Javascript Says Right back aka!";
                    responseCallback(responseData);
                }
            });
        })
    }

    public connectWebViewJavascriptBridge(callback: Function) {
        // @ts-ignore
        if (window.WebViewJavascriptBridge) {
            // @ts-ignore
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady'
                , function () {
                    // @ts-ignore
                    callback(WebViewJavascriptBridge)
                },
                false
            );
        }
    }

    public onWithoutCallbackClick(): void {
        //send message to native
        var data = {id: 1, content: "这是一个图片 <img src=\"a.png\"/> test\r\nhahaha"};
        // @ts-ignore
        window.WebViewJavascriptBridge.send(data
            , function (responseData: string) {
                console.log("repsonseData from java, data = " + responseData);
            }
        );
    }

    public onWithCallbackClick(): void {
        //call native method
        // @ts-ignore
        window.WebViewJavascriptBridge.callHandler(
            'submitFromWeb'
            , {'param': '中文测试'}
            , function(responseData:string) {
                console.log("send get responseData from java, data = " + responseData)
            }
        );
    }
}