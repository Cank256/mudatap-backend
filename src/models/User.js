const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: String,
  workspaces: [
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
