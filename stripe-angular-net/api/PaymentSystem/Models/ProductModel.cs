﻿namespace PaymentSystem.Models
{
    public class ProductModel
    {
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public int Quantity { get; set; }
        public long? Amount { get; set; }
    }
}
