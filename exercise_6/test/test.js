describe('pouchdb put test', function() {
    var db;

    beforeEach(function () {
        var $injector = angular.injector(['ng', 'pouchdb', 'app']);
        var pouchDB = $injector.get('pouchDB');
        db = pouchDB('diaryDB');
    });

    it('should add an entry to db using put method and also retrieve using get method', function(done) {
        var entry = {_id : new Date().valueOf().toString(), title : "Hello World", entry: "Test application"}
        db.put(entry).then(function(result){
            db.get(entry._id).then(function(entry){
                expect(entry.entry).toBe("Test application");
            })
        })
            .catch(function(err){
                console.log('err',err);
            })
            .finally(function(){
                db.destroy();
                done();

            });
    });
})