module.exports = {
    hub_ip : '',
    app_id : 'amzn1.echo-sdk-ams.app.999999-d0ed-9999-ad00-999999d00ebe'//,
//    Optional channel configuration
    channels : [
         {
           utterance_name : 'watch NBC',
           activity: 'The TV',
           channel: "12"
        },
        {
           utterance_name : 'watch CBS',
           activity: 'The TV',
           channel: "5"
        }
    ]
};
