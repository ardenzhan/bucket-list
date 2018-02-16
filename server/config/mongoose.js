const mongoose  = require('mongoose');
      db_name   = "bucket_list";

mongoose.connect(`mongodb://localhost/${db_name}`);