class Request{
    baseURL = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine';
    getData({url, method='GET', data={}}){
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseURL + url,
                data: data,
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                // header: {}, // 设置请求的 header
                success: res => {
                    // success
                    if(res.data.code === 0){
                        resolve(res);
                    }else{
                        this._showError();
                    }
                },
                fail: () =>  {
                    // fail
                    reject();
                    this._showError();
                },
                complete: function() {
                    // complete
                }
            });
        })
    }

    _showError(){
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export {Request}