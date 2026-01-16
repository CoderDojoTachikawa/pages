
// 先ほど取得したトークンをここに貼り付けます
const ACCESS_TOKEN = 'E-sA4pMjtZ8_Ntq-vzba';
const GROUP_NAME = 'coderdojotachikawa';


//////////////////////////////////////////
$(function(){

	initContent();

});


const initContent = () =>{

	await fetchUpcomingEvents();

}



const fetchUpcomingEvents = async () =>{
	// since=today を指定することで、今日以降（今後）のイベントのみ取得できます
	const url = `https://api.doorkeeper.jp/groups/${GROUP_NAME}/events?since=today`;

	try {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${ACCESS_TOKEN}`,
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error(`エラーが発生しました: ${response.status}`);
	}

	const events = await response.json();

	// 取得したイベントリストを表示
	events.forEach(item => {
		const event = item.event;
		console.log(`タイトル: ${event.title}`);
		console.log(`開催日時: ${new Date(event.starts_at).toLocaleString()}`);
		console.log(`URL: ${event.public_url}`);
		console.log('---');
	});

	} catch (error) {
		console.error('取得失敗:', error);
	}
}

