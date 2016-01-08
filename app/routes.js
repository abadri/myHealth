module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/getContacts/:uid', function(req, res) {
        var contacts = [{
            name: 'Anna',
            phone: '408 123 4567',
            info: 'Doctor'
        }, {
            name: 'John Doe',
            phone: '408 123 1223',
            info:'co-ordinator'
        }, {
            name: 'David M',
            phone: '123 121 1223',
            info:'Doctor'
        }, {
            name: 'Hari',
            phone: '408 123 1566',
            info:'insurance agent'
        }, {
            name: 'Jan Yan',
            phone: '408 123 3333',
            info:'doctor'
        }, {
            name: 'Kaiser Santa Clara',
            phone: '180 000 0000',
            info:'Hospital'
        }];
        res.json(contacts);
    });


     // sample api route
    app.get('/api/getPrescriptions/:uid', function(req, res) {
        var medicines = [{
            name: 'Abacavir Sulfate',
            qty: '10',
            time:'10:30 am'
        }, {
            name: 'Plenaxis',
            qty: '2',
            time:'12.00 pm'
        }, {
            name: 'Accolate',
            qty: '50',
            time:'3:00 pm'
        }, {
            name: 'Aminosyn HF 8%',
            qty: '23',
            time:'7:00 pm'
        }, {
            name: 'Azulfidine EN',
            qty: '44',
            time:'5:00 pm'
        }, {
            name: 'Azactam',
            qty: '34',
            time:'9:00 am'
        }];
        res.json(medicines);
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

        // sample api route
    app.post('/api/authenticate', function(req, res) {
        
        var user = {
            name: 'John Doe',
            phone: '408 123 1234',
            uid: 1234
        };
        res.json(user);
    });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load our public/index.html file
    });

};
