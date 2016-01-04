module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/getContacts/:uid', function(req, res) {
        var contacts = [{
            name: 'Abilash',
            phone: '408 123 4567'
        }, {
            name: 'John Doe',
            phone: '408 123 1223'
        }, {
            name: 'David M',
            phone: '123 121 1223'
        }, {
            name: 'Hari',
            phone: '408 123 1566'
        }, {
            name: 'Jan Yan',
            phone: '408 123 3333'
        }, {
            name: 'Kaiser Santa Clara',
            phone: '180 000 0000'
        }];
        res.json(contacts);
    });


     // sample api route
    app.get('/api/getPrescriptions/:uid', function(req, res) {
        var contacts = [{
            name: 'Abacavir Sulfate',
            qty: '10'
        }, {
            name: 'Plenaxis',
            qty: '2'
        }, {
            name: 'Accolate',
            qty: '50'
        }, {
            name: 'Aminosyn HF 8%',
            qty: '23'
        }, {
            name: 'Azulfidine EN',
            qty: '44'
        }, {
            name: 'Azactam',
            qty: '34'
        }];
        res.json(contacts);
    });

    // sample api route
    app.get('/api/getAppointments/:uid', function(req, res) {
        var contacts = [{
            name: 'Dr. Abilash',
            date: '12/01/2016',
            time: '1:00 pm',
            location: 'Kaiser Permanente Santa Clara ',
            address: '700 Lawrence Expressway, Santa Clara, CA 95051',
            description: 'General check up'
        }, {
            name: 'Dr. Jim carry',
            date: '22/01/2016',
            time: '11:00 am',
            location: 'Palo Alto Medical Foundation',
            address: '2734 El Camino Real, Santa Clara, CA 95051',
            description: 'Blood Pressure screening'
        }, {
            name: 'Dr. Margaret Mahony',
            date: '12/02/2016',
            time: '2:00 pm',
            location: 'Kaiser Permanente Santa Clara ',
            address: '700 Lawrence Expressway, Santa Clara, CA 95051',
            description: 'General check up'
        }, {
            name: 'Dr. Hu Rona Jane MD',
            date: '22/02/2016',
            time: '10:40 am',
            location: 'Stanford medical center',
            address: '401 Quarry Rd, Palo Alto, CA 94304',
            description: 'Specialist check up'
        }];
        res.json(contacts);
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load our public/index.html file
    });

};
