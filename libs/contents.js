

//////////////////////////////////////////
$(function(){

	initContent();

});


const initContent = async () =>{

	const xJson = await fetchUpcomingEvents();
	if(!xJson || xJson.length <= 0){
		$("#schedule").hide();

	}else{
		$("#schedule ul > li").remove();

		xJson.forEach(item => {
			const xObj = item.event;
			const xLi = `<li><a href="${xObj.public_url}" target="_blank"><span class="date">${new Date(xObj.starts_at).toLocaleString()}</span><span class="ttl">${xObj.title}</span></a></li>`;

			$("#schedule ul").prepend(xLi);
		});
	}
}

const ACCESS_TOKEN = 'E-sA4pMjtZ8_Ntq-vzba';
const GROUP_NAME = 'coderdojotachikawa';


const fetchUpcomingEvents = async () =>{
	const xToday = new Date().toISOString().split('T')[0];
	const xUrl = `https://api.doorkeeper.jp/groups/coderdojotachikawa/events?since=${xToday}`;
	console.log("get event",xUrl);

	let xResData = null;

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

		xResData = await response.json();

	} catch (error) {
		console.error('取得失敗:', error);

	} finally{
		return xResData;
	}

}

