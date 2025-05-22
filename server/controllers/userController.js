import User from '../models/User.js';

// Update User Profile
export const updateProfile = async (req, res) => {
  const { age, gender, bio, preferences } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.profile = { age, gender, bio, preferences };
    await user.save();
    res.json({ message: 'Profile updated', profile: user.profile });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};