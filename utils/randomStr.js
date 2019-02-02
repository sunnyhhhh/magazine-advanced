const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
                'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G',
              'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let random = function(n){
    let str = '';
    for(let i = 0; i < n; i++){
        let index = Math.floor(Math.random() * alpha.length);
        str += alpha[index];
    }
    return str;
}

export {random}