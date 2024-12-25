const statusCode = {
    'success': 200,
    'created': 201,
    'noContent': 204,
    'badRequest': 400,
    'unauthorized': 401,
    'forbidden': 403,
    'notFound': 404,
    'conflict': 409,
    'internalError': 500,
}

const successMessage = {
    'index': 'SUCCESS',
    'server': 'Server is running',
    
}

const failMessage = {
    'internalError': 'Internal Server Error',
    'index': 'FAILED',
    'server': 'Server is not running',
    'notFoundID': 'ID is not found',
    'existData': 'Data is existed'
}

module.exports = { statusCode, successMessage, failMessage }