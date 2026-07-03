const {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  findAddressById,
} = require("../services/address.service");

// Create Address
const addAddress = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      address,
      city,
      state,
      pincode,
    } = req.body;

    const newAddress = await createAddress({
      fullName,
      phone,
      address,
      city,
      state,
      pincode,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Address added successfully",
      data: newAddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get User Addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await getAddresses(req.user.id);
    console.log(req.user.id);

    res.status(200).json({
      message: "Addresses fetched successfully",
      data: addresses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Update Address
const updateUserAddress = async (req, res) => {
  try {
    const address = await findAddressById(req.params.id);

    if (!address) {
      return res.status(404).json({
        message: "Address not found",
      });
    }

    if (address.userId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedAddress = await updateAddress(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Address updated successfully",
      data: updatedAddress,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete Address
const removeAddress = async (req, res) => {
  try {
    const address = await findAddressById(req.params.id);

    if (!address) {
      return res.status(404).json({
        message: "Address not found",
      });
    }

    if (address.userId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await deleteAddress(req.params.id);

    res.status(200).json({
      message: "Address deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  addAddress,
  getAllAddresses,
  updateUserAddress,
  removeAddress,    
};