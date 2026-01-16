

//////////////////////////////////////////
$(function(){

	initContent();

});


const initContent = async () =>{

	await fetchUpcomingEvents();

}

const ACCESS_TOKEN = 'E-sA4pMjtZ8_Ntq-vzba';
const GROUP_NAME = 'coderdojotachikawa';


https://coderdojotachikawa.doorkeeper.jp/events/193553


const fetchUpcomingEvents = async () =>{
	const xToday = new Date().toISOString().split('T')[0];
	const xUrl = `https://api.doorkeeper.jp/groups/coderdojotachikawa/events?since=${xToday}`;

	try {
		const response = await fetch(xUrl, {
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

