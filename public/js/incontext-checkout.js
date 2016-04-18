var getECToken = (paypal) => (e) => {
    paypal.checkout.initXO();
    e.preventDefault();

    fetch('/payment/incontext', {
        method: 'POST'
    })
        .then((res) => res.json())
        .then((json) => {
            var token = json.token;
            paypal.checkout.startFlow(token);
        })
        .catch((err) => {
            console.error('error when getting paypal token: ', err);
            paypal.checkout.closeFlow();
        });

};

var incontextSetup = (pp = window.paypal) => {
    console.log('ic setup');
    const {merchant_id, environment} = JSON.parse(window.__paypal__.replace(/\&quot\;/g, '"'));
    pp.checkout.setup(merchant_id, {
        environment: environment,
        buttons: [
            {
                container: 'ic-form',
                type: 'checkout',
                color: 'blue',
                size: 'medium',
                click: getECToken(pp)
            }
        ]
    });
};

window.incontextSetup = incontextSetup;

// export default incontextSetup;
