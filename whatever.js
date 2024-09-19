const setTimeFu = function(ms){
    return new Promise(function(res){
        return setTimeout(res, ms);
    })
}
  async function excuteComends(){

    await setTimeFu(9000);
    console.log("the first step is done!");
     await setTimeFu(3000);
    console.log("the second step is on the way!");
    await setTimeFu(3000);
    console.log("the second step is done.");
    await setTimeFu(3000);
    console.log("the third step is on the way!");
    await setTimeFu(3000);
    console.log("the third step is completed.");
    await setTimeFu(3000);
    console.log("we are workin on fourth step which is the last");
    await setTimeFu(3000);
    console.log("we are done with all four steps. thank you for your time!");
 }
 excuteComends()