/**
 * 微信认证后的 app 信息
 * 如果有需要可以将这些信息放到数据库中读取方便以更增加
 * 注：测试时请替换您真实的数据
 */
module.exports = function(){
	//个人订阅号
	return {
		//AppID(应用ID)
		appid: 'wx3b94df1cd4a35e0e',
		//AppSecret(应用密钥)
		appsecret: '9c4480945253c18589f99ce5ee3dcd2e ',
		//Token(令牌)
		token: 'Tokenjs'
	};
	//微信测试号
//	return {
//		//AppID(应用ID)
//		appid: 'wx916ac337bf3c3c22',
//		//AppSecret(应用密钥)
//		appsecret: '382dd0502bea061e8329ff7c1e83e7dc',
//		//Token(令牌)
//		token: 'wx_svon_me'
//	};
};
