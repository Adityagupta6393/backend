const asyncHnadler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err));
    }
};

export {asyncHandler}

// const asyncHandler = () => {};
// const asyncHandler = (fn) => { () => {} };       These are steps to build and understand the asyncHandler
// const asyncHandler = (fn) => async () => { };

// const asyncHandler = (fn) => async () => {
//     try {
//         await fn(req , res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message,
//         })
//     }
// }