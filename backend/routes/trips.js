exports.show = function (req, res) {
	res.render('trips', {

	});	
};

exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * from trips', [], function(err, results) {
        	if (err) return next(err);

        	res.send(results);

        	
    		res.render( 'trips.handlebars', {
    			trips :results
    		});
			
      });
	});
};
exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){

		connection.query('SELECT * FROM trips WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}

			res.render('trips.handlebars',{page_title:"Edit Customers - Node.js", data : rows[0]});      
		}); 
	});
	};