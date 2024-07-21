const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
  },
  meta: [
    {
      workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
      },
      role: String,
      department: String,
      projects: {
        projectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project',
        },
      }
    },
  ],
})

module.exports = mongoose.model('User', UserSchema)
