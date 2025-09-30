const data = {
  "projects": [
    {
      "title": "Ecommerce Platform",
      "stack": "MERN (MongoDB , Express, React, Node.js)",
      "projectImage": "/Ecommerce-Preview.png",
      "technologies": {
        "frontend": [
          "React",
          "React DOM",
          "React Router",
          "React Router DOM",
          "Redux Toolkit",
          "React Redux",
          "Redux Toolkit Query",
          "Axios",
          "Formik",
          "Yup",
          "React Toastify",
          "React Icons",
          "@heroicons/react",
          "@material-tailwind/react",
          "@faker-js/faker",
          "js-cookie"
        ],
        "backend": [
          "Node.js",
          "Express.js",
          "MongoDB Atlas",
          "Mongoose",
          "JWT (jsonwebtoken)",
          "bcrypt",
          "Multer",
          "Cloudinary",
          "express-fileupload",
          "joi",
          "express-joi-validation",
          "uuid",
          "dotenv",
          "morgan",
          "cors"
        ]
      },
      "highlights": [
        "Built a full-stack eCommerce application using MERN with Redux Toolkit for scalable state management.",
        "Implemented secure user authentication and role-based authorization with JWT and bcrypt.",
        "Developed CRUD functionality, product search & filtering, image uploads, and order management.",
        "Deployed frontend on Vercel and backend on Render with MongoDB Atlas as the cloud database."
      ]
    },
    {
      "title": "Blog App",
      "stack": "Next.js",
      "projectImage": "/Blog-App.png",
      "technologies": {
        "frontend": [
          "Next.js",
          "Formik",
          "Yup",
          "Tailwind CSS"
        ],
        "backend": [
          "MockAPI"
        ]
      },
      "highlights": [
        "Developed a full-stack blog application using Next.js with dynamic routing and responsive UI.",
        "Built CRUD operations for blog posts, enabling users to create, edit, and view content seamlessly.",
        "Integrated Formik and Yup for form handling and validation, ensuring data integrity.",
        "Used MockAPI as a backend service for storing and retrieving posts."
      ]
    },
    {
      "title": "Segmentation of Brain Tumors in MRI using Hybrid CNNs",
      "stack": "TensorFlow, Keras",
      "projectImage": "/unet-test1.png",
      "technologies": {
        "frontend": [],
        "backend": [
          "TensorFlow",
          "Keras",
          "NumPy",
          "Pandas",
          "Matplotlib"
        ]
      },
      "highlights": [
        "Conducted comparative study of U-Net and hybrid CNN models (Seg-U-Net) for brain tumor segmentation.",
        "Designed deep learning pipelines for MRI preprocessing, feature extraction, and segmentation.",
        "Improved segmentation accuracy by experimenting with hybrid architectures.",
        "Evaluated model performance with Dice coefficient, IoU, and accuracy."
      ]
    }
  ]
};

export default data;

