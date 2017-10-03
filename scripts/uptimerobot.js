//read only api keys
export var apiKeys = [
  'm776535140-532aa29ae18195b1e80bc99e', //KunRuch Creations
  'm776535123-2492b15387efb6d456dec9bd', //Super Dev Resources
  'm778218270-e1cbb98a7b2a62563039feb2', //SDR News
  'm778163674-2cfe5c932562212332ced0ed', //SDR Tools
  'm777322185-43bfe0da4ddb26accc9751b4', //GraphicFlip
  'm779488541-4743295754bb5c6590f56954', //GraphicFlip News
  'm777322182-0a125bd5409be964c28190f8', //TemplateFlip
  'm779335443-7fbdb491bfdbe56967052078', //85apps,
  'm779488534-9a1588a6c23e5464dced922f', //MM Themes
  'm779488539-70c95fd2a12b7589611e1ff4', //WhatVersion.info
  'm778193559-047fa15c71070d0404765d6a', //MMCSS
  'm778193560-302971c3b621436fcdc52390', //MMPilot
  'm776536132-50d52b19b64f30b4be0f8e35', //Monika's Site
  'm776536134-9a92f84ee596fd0993ae1f32', //Kanishk's Site
];

export function getApiRequest(key) {
  return 'https://api.uptimerobot.com/getMonitors?apiKey='+ key +'&responseTimes=1&responseTimesAverage=60&customUptimeRatio=1-7-30&format=json&noJsonCallback=1';
}

export function getStatusFromCode(code) {
    if(code == 0) return "paused";
    if(code == 1) return "not available";
    if(code == 2) return "up";
    if(code == 8) return "seems down";
    if(code == 9) return "down";
}
