exports.list = function (req, res) {
    var query = req.body.query || {};
    var projection = req.body.projection || {};
    UserService.list(req.body.skip, req.body.limit, query, projection)
        .on(enums.Events.ERROR, function (err) {
            res.sendErrorResponse(err);
        })
        .on(enums.Events.DONE, function (resp) {
            res.sendSuccessResponse(resp);
        });
};

exports.login = function (req, res) {
    var service = req.params.service;
    console.log(service, "Login feature, To Be Implemented");
    res.sendSuccessResponse({feature: "TBI"});
};

exports.get = function (req, res) {
    var userId = req.params.userId;
    if(userId) {
        UserService.get(userId)
            .on(enums.Events.ERROR, function (err) {
                res.sendErrorResponse(err);
            })
            .on(enums.Events.DONE, function (resp) {
                res.sendSuccessResponse(resp);
            });
    } else {
        res.sendErrorResponse({error: "Invalid UserID Supplied"});
    }
};

exports.delete = function (req, res) {
    var userId = req.params.userId;
    if(userId) {
        UserService.delete(userId)
            .on(enums.Events.ERROR, function (err) {
                res.sendErrorResponse(err);
            })
            .on(enums.Events.DONE, function (resp) {
                res.sendSuccessResponse(resp);
            });
    } else {
        res.sendErrorResponse({error: "Invalid UserID Supplied"});
    }
};

exports.update = function (req, res) {
    var userId = req.params.userId;
    var dirtyProps = req.body.dirtyProps;
    if(userId) {
        UserService.update(userId, dirtyProps)
            .on(enums.Events.ERROR, function (err) {
                res.sendErrorResponse(err);
            })
            .on(enums.Events.DONE, function (resp) {
                res.sendSuccessResponse(resp);
            });
    } else {
        res.sendErrorResponse({error: "Invalid UserID Supplied"});
    }
};