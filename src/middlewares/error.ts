// TODO: Add Logger

export class ErrorHandler {
  public static clientErrorHandler(err, req, res, next): void {
    // Logger.error(err.stack);
    if (req.xhr) {
      return res.status(500).send({ error: 'Something went wrong!' });
    }
    return next(err);
  }

  public static logErrors(err, req, res, next): void {
    // Log.error(err.stack);
    return next(err);
  }
}