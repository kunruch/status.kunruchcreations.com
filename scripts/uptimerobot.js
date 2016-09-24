//read only api keys
export var apiKeys = [
  'm776535140-532aa29ae18195b1e80bc99e', //KunRuch Creations
  'm776535123-2492b15387efb6d456dec9bd', //Super Dev Resources
  'm776535138-ba6e3462f4b14be50319c129', //Games.KunRuch
  'm776551244-4672e6d32323e3275a8823d6', //Apps.KunRuch
  'm776551255-0eaeabed89af85a19bf91ce3', //MyTextTwister Webapp
  'm776536132-50d52b19b64f30b4be0f8e35', //Monika's Site
  'm776536134-9a92f84ee596fd0993ae1f32', //Kanishk's Site
];

export function getStatusFromCode(code) {
    if(code == 0) return "paused";
    if(code == 1) return "not available";
    if(code == 2) return "up";
    if(code == 8) return "seems down";
    if(code == 9) return "down";
}
