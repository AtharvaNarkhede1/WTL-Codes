const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Get user dashboard (protected route)
// @route   GET /api/protected/dashboard
// @access  Private
router.get('/dashboard', protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome to your dashboard, ${req.user.username}!`,
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role
    },
    data: {
      lastLogin: new Date(),
      notifications: 3,
      tasks: ['Complete project', 'Review code', 'Update documentation']
    }
  });
});

// @desc    Get user profile (protected route)
// @route   GET /api/protected/profile
// @access  Private
router.get('/profile', protect, (req, res) => {
  res.status(200).json({
    success: true,
    profile: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt
    }
  });
});

// @desc    Admin only route
// @route   GET /api/protected/admin
// @access  Private/Admin
router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Admin access granted',
    data: {
      totalUsers: 150,
      activeUsers: 120,
      systemStatus: 'All systems operational',
      serverUptime: '99.9%'
    }
  });
});

// @desc    Get all users (admin only)
// @route   GET /api/protected/users
// @access  Private/Admin
router.get('/users', protect, authorize('admin'), async (req, res) => {
  try {
    const User = require('../models/User');
    const users = await User.find().select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;