# MurliMadhav – Project Vision & System Design Report

## 1. Executive Summary

MurliMadhav is a dairy-first commerce platform built to modernize the traditional neighborhood dairy ecosystem rather than replace it.

Unlike conventional grocery delivery platforms, MurliMadhav focuses exclusively on fresh dairy products delivered directly from our own dairy and trusted production units to households.

The platform enables customers to place prepaid orders throughout the day, while deliveries are fulfilled in the next available delivery cycle according to the customer's preferred delivery window. This model ensures freshness, operational efficiency, and predictable logistics.

The platform consists of three integrated systems:

- Customer Mobile Application
- Delivery Partner Mobile Application
- Admin Web Dashboard

Together, these systems create an end-to-end dairy supply chain—from production to doorstep delivery.

## 2. Problem Statement

Today, households purchase milk in one of two ways:

### Option 1

Daily from a nearby dairy vendor.

**Pros**

- Fresh milk
- Trusted quality

**Cons**

- Daily travel
- Limited convenience
- Manual payment
- No subscriptions
- No tracking

### Option 2

Packaged milk from grocery stores.

**Pros**

- Easily available

**Cons**

- Processed
- Less fresh
- Limited dairy products
- Generic quality

### Customers want

- Fresh dairy products
- Trusted source
- Easy ordering
- Reliable daily delivery
- Digital payments
- Flexible scheduling

There is currently no platform dedicated exclusively to solving this problem.

## 3. Our Solution

MurliMadhav is a dedicated dairy commerce platform that provides:

- Farm-fresh milk
- Fresh paneer
- Ghee
- Butter
- Curd
- Lassi
- Cream
- Seasonal dairy products

Customers order digitally while MurliMadhav handles procurement, packaging, routing, and delivery.

Rather than instant delivery, the platform operates on a planned fulfillment model, ensuring higher freshness and lower wastage.

## 4. Vision

To become the most trusted digital dairy brand by delivering authentic, fresh, and premium-quality dairy products directly from our dairy to every household.

## 5. Mission

- Digitize traditional dairy delivery
- Eliminate dependence on cash transactions
- Ensure freshness
- Reduce wastage
- Build predictable daily delivery routes
- Deliver premium dairy experiences

## 6. Business Model

MurliMadhav operates on a pre-order and scheduled delivery model.

```text
The customer placed an order today.
↓
Order enters tomorrow's production & delivery cycle.
↓
Milk is prepared, packaged, and assigned to a delivery route.
↓
Delivery partner delivers during the selected delivery window.
↓
Customers receive fresh dairy products.
```

This approach allows:

- Better inventory planning
- Zero overproduction
- Better logistics
- Consistent quality
- Lower operational costs

## 7. Payment Strategy

MurliMadhav will be a **100% prepaid** platform.

### Accepted payments

- UPI
- Debit Card
- Credit Card
- Net Banking
- Wallets

> Cash on Delivery will not be supported.

### Why Prepaid?

- Faster delivery
- No cash handling
- No failed collections
- Lower fraud
- Better accounting
- Accurate production planning
- Reduced order cancellations

We can not waste time in money transaction, because of freshness of product.

### Refund Model

Refunds are **fully admin-controlled and manual**. There is no automatic or customer-initiated refund. Every refund is the outcome of a phone conversation between the admin and the customer.

**Flow:**

1. **Customer raises a complaint** — for a wrong, missing, damaged, or unsatisfactory delivery, the customer files a complaint from the app.
2. **Complaint appears in the admin panel** — the complaint is listed for the admin along with the customer's **phone number** and the related order details.
3. **Admin calls the customer** — the admin reaches out directly on that phone number to understand the issue and decide the resolution. The refund decision is entirely at the admin's discretion, based on that call.
4. **Admin raises the refund** — if the admin agrees to a refund, the admin manually triggers it from the admin panel (full or partial).
5. **Credit is issued** — the refund is credited back to the customer's original payment method.

> Only the admin can initiate a refund. Customers can raise complaints but cannot trigger refunds themselves.

## 8. Delivery Model

Unlike instant delivery platforms, MurliMadhav uses scheduled delivery.

### How it works

1. **Admin defines a delivery window.** The admin sets an overall window in which the delivery partner will be out delivering — e.g. *Morning: 5:00 AM – 11:00 AM*.
2. **The system splits the window into slots.** The window is divided into fixed intervals (default 1 hour), producing selectable slots: 5–6, 6–7, 7–8, 8–9, 9–10, 10–11.
3. **Each slot has a capacity.** Every slot carries a maximum number of orders it can accept, so the delivery partner can realistically reach every location within that hour. Once a slot is full, it is no longer offered to customers.
4. **The customer picks an available slot.** At checkout the customer chooses one of the remaining (not-yet-full) slots. The delivery partner fulfills the order during that slot.

### Configuration

Per delivery window the admin controls:

- **Window** — start and end time (e.g. 5:00 AM – 11:00 AM).
- **Slot length** — interval size in minutes (default 60).
- **Slot capacity** — maximum orders per slot. This is the foundation that keeps each slot deliverable — the delivery partner never gets more stops in an hour than they can serve.

The admin can configure **multiple separate delivery windows** in a day — e.g. Morning, Afternoon, and Evening — each with its own start/end time, slot length, and slot capacity. The customer sees the combined set of available slots across all windows and picks one.

### Example

**Morning window: 5:00 AM – 11:00 AM**, slot length 60 min, capacity 15 orders/slot.

Generated slots offered to the customer:

| Slot | Capacity | Status |
| --- | --- | --- |
| 5:00 – 6:00 AM | 15 | Available |
| 6:00 – 7:00 AM | 15 | Available |
| 7:00 – 8:00 AM | 15 | Full — hidden |
| 8:00 – 9:00 AM | 15 | Available |
| 9:00 – 10:00 AM | 15 | Available |
| 10:00 – 11:00 AM | 15 | Available |

The customer picks any available slot, and the delivery partner fulfills all orders in that slot during the hour.

## 9. Platform Architecture

```text
               MurliMadhav Platform

                     Admin Dashboard
                           │
          ┌────────────────┼────────────────┐
          │                │                │
      Product          Orders          Delivery
     Management      Management       Management
          │                │                │
          └────────────────┼────────────────┘
                           │
                    Central Backend
                           │
        ┌──────────────────┴─────────────────┐
        │                                    │
 Customer Mobile App             Delivery Partner App
```

## 10. System 1 — Customer Mobile Application

This is the primary application used by customers.

### Core Features

#### Authentication

- Mobile OTP Login
- Email Login
- Profile Management

#### Quick Access Panel

- Add 1 ltr, or reduce
- Leave for today (refund at month end)

#### Product Catalog

Browse:

- Milk
- Paneer
- Butter
- Ghee
- Curd
- Lassi
- Cream
- Other dairy products

Each product contains:

- Images
- Description
- Weight/Volume
- Nutritional information (slide karte hue)
- Freshness details
- Price
- Availability

#### Smart Search

- Product Search
- Category Search

#### Cart

- Add products
- Remove products
- Update quantity
- Delivery instructions

#### Delivery Scheduling

Customer chooses:

- Delivery date
- Delivery slot
- Preferred address

#### Online Payments

- UPI
- Cards
- Wallet
- Net Banking

#### Order Tracking

Order Status:

1. Order Placed
2. Confirmed
3. Preparing
4. Packed
5. Out for Delivery
6. Delivered

#### Notifications

- Order confirmation
- Payment success
- Delivery reminders
- Delivery completed
- Offers
- Product availability
- 15 min before delivery

#### Address Management

- Home
- Office
- Other

#### Order History

- Previous orders
- Download invoices
- Reorder

#### Subscription (Future Phase)

- Daily milk subscription
- Weekly subscription
- Monthly subscription
- Pause anytime
- Resume anytime
- Vacation mode

> **IMPORTANT:** In subscription you will be at first priority of full-filling demand.

#### Referral Program

- 1 referral → 1 Mathe ki theli
- Upper limit: 5 / month

#### Ratings & Reviews

Customers can review:

- Products
- Delivery experience

## 11. System 2 — Delivery Partner Application

Used by delivery executives.

### Authentication

- Mobile OTP
- Employee Verification

### Dashboard

- Today's deliveries
- Completed deliveries
- Pending deliveries
- Total earnings

### Route Management

- Optimized delivery sequence
- Navigation integration
- Customer address
- Contact customer

### Order Details

- Customer information
- Delivery notes
- Product list
- Quantity

### Delivery Confirmation

- Delivered
- Customer OTP

### Earnings

- Daily earnings
- Weekly earnings
- Monthly earnings
- Incentives

### Notifications

- New assigned route
- Delivery updates
- Route changes

## 12. System 3 — Admin Dashboard

The operational brain of MurliMadhav.

### Dashboard Overview

- Revenue
- Orders
- Customers
- Delivery partners
- Products
- Inventory
- Sales
- Analytics

### User Management

- Customers
- Delivery Partners
- Admins
- Roles
- Permissions

### Product Management

- Create product
- Update pricing
- Stock management
- Images
- Categories
- Availability

### Inventory Management

- Milk production
- Packaging inventory
- Raw material
- Finished goods
- Low stock alerts

### Order Management

- View all orders
- Assign delivery
- Cancel order
- Refund
- Status updates

### Delivery Management

- Assign routes
- Assign delivery partners
- Track deliveries
- Monitor live status

### Payment Management

- Transactions
- Refunds
- Settlements
- Invoices

### Analytics

- Daily Sales
- Monthly Sales
- Top Products
- Repeat Customers
- Average Order Value
- Revenue
- Inventory Forecast
- Delivery Success Rate
- Cancellation Rate

### Customer Support

- Complaints
- Refund requests
- Replacement requests
- Support tickets

### Offers & Promotions

- Coupons
- Referral programs
- Discount campaigns
- Festival offers

## 13. Operational Workflow

```text
Customer Places Order
          │
          ▼
Online Payment Successful
          │
          ▼
Order Confirmed
          │
          ▼
Inventory Reserved
          │
          ▼
Product Prepared
          │
          ▼
Packaging
          │
          ▼
Delivery Partner Assigned
          │
          ▼
Route Generated
          │
          ▼
Delivered
          │
          ▼
Customer Feedback
```

## 14. Core Business Principles

- Fresh products only
- No middlemen
- Scheduled deliveries
- Transparent pricing
- Digital-first operations
- Zero cash handling
- Reliable logistics
- Customer trust above all

## 15. Future Roadmap

### Phase 1

- Customer App
- Delivery App
- Admin Dashboard
- Online Payments
- Scheduled Deliveries

### Phase 2

- Daily milk subscriptions
- Wallet system
- Referral rewards
- Coupons
- Loyalty points
- Push notifications

### Phase 3

- AI demand forecasting
- Smart route optimization
- Inventory prediction
- Dynamic delivery slot allocation
- Sales analytics
- Automated production planning

### Phase 4

- Multi-city expansion
- Franchise management
- Distributor dashboard
- Vendor management
- Business intelligence
- ERP integration

## 16. Technology Architecture (Suggested)

| Layer | Technology |
| --- | --- |
| Frontend | Flutter (Customer & Delivery apps), Next.js (Admin Dashboard) |
| Backend | FastAPI (Python) |
| Database | PostgreSQL |
| Cache & Queue | Redis |
| Object Storage | AWS S3 or Cloudflare R2 |
| Authentication | Firebase Authentication (OTP), JWT |
| Maps & Navigation | Google Maps Platform |
| Notifications | Firebase Cloud Messaging (FCM) |
| Payments | Razorpay |
| Deployment | Docker, Nginx, AWS / DigitalOcean / Hetzner |

## 17. Unique Selling Proposition (USP)

MurliMadhav is not another grocery delivery application. It is a digitally managed dairy ecosystem built around freshness, trust, and operational efficiency.

Its key differentiators are:

- Own dairy-based supply chain ensuring consistent quality.
- Fresh dairy products prepared and dispatched through scheduled delivery cycles rather than warehouse stock.
- 100% prepaid ordering for predictable production and seamless accounting.
- Customer-selected delivery windows for convenience.
- Dedicated ecosystem with separate applications for customers, delivery partners, and administrators.
- Data-driven operations with inventory planning, delivery management, and analytics at its core.
- Designed for long-term expansion into subscriptions, AI-powered demand forecasting, and multi-city dairy distribution.

MurliMadhav's vision is to become the digital equivalent of the trusted neighborhood dairy—combining traditional freshness with modern technology and operational excellence.