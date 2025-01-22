#  Day 2 - System Design & Integration: 
Welcome to Day 2 of my **Marketplace Builder Hackathon** journey On this day, I focused on creating a detailed **system design** and planning how the frontend interacts with the backend, along with integration of third-party APIs.

---

##  System Design Overview

The design ensures a seamless, scalable, and user-friendly platform where the frontend communicates effectively with the backend to provide a dynamic shopping experience.

### **Key Components:**

1. **Frontend:**
   - Built using **Next.js** and styled with **Tailwind CSS**.
   - UI components are enhanced using **ShadCN UI**.
   - **State Management:** Handled with Zustand for efficient data flow.

2. **Backend:**
   - **Sanity.io** is used for managing product, customer, and order data.
   - API routes are created to handle all communication with the frontend.

3. **Third-Party APIs:**
   - **Purpose:** To handle features like payment processing and real-time product availability.
   - **Integration Flow:** The backend interacts with third-party APIs and sends responses to the frontend.
   - **Security:** API key-based authentication over HTTPS.

---

##  API Routes Definition

Here are the main API routes defined for Day 2:

- **GET /api/products:** Fetch a list of all available products.
- **POST /api/order:** Create a new order and process it through the payment gateway.
- **GET /api/order/:id:** Retrieve details of a specific order by its ID.
- **PUT /api/order/:id:** Update the order status (e.g., shipped, delivered).
- **GET /api/payment/verify:** Verify payment status with the payment gateway.

*(Additional routes for advanced payment methods will be implemented in future phases.)*

---

##  Visual Data Structure

For Day 2, I created a detailed system architecture diagram to represent how different components connect and communicate:

![Day 2 System Design Diagram](https://github.com/MahnoorAbdulnaeem/Marketplace-Hackathon-2025/blob/main/day-2/5.png)




## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Zustand
- **Backend:** Sanity.io
- **API Integration:** Third-party API for payment processing and product availability
- **Authentication:** Clerk for secure user login and transactions

---

##  Day 2 Summary

On Day 2, I successfully:

1. Designed the **system architecture** connecting the frontend, backend, and third-party APIs.
2. Defined **API routes** for product fetching, order management, and payment verification.
3. Created a clear **system design diagram** to visualize the entire flow.

Next steps involve implementing the API routes, integrating third-party services, and starting frontend development to bring the design to life.

