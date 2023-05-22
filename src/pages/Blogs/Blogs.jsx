import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Blogs = () => {

    const location = useLocation();

    // Update the document title based on the current location
    useEffect(() => {
        document.title = `BabyToy | ${location.pathname === '/blogs' ? 'Blog' : ''}`;
    }, [location]);
    return (
        <div className='mt-5 mb-5'>
            <div className='flex justify-around'>
                <div className="card w-96 bg-slate-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>An access token and a refresh token are commonly used in authentication systems to securely authorize and authenticate client applications. Here's an explanation of what they are, how they work, and where they should be stored on the client-side. <br /><br />

                            Access Token:
                            An access token is a credential that is issued to a client application after a successful authentication process. It represents the client's authorization to access protected resources on a server. Access tokens are typically short-lived and have an expiration time to enhance security.<br /><br />

                            Refresh Token:
                            A refresh token is a long-lived credential that is also issued during the authentication process, along with the access token. The refresh token is used to obtain a new access token without the need for the client application to reauthenticate with the server. It provides a way to maintain the user's session across multiple requests or after the access token expires.<br /><br />

                            How They Work:
                            When a user authenticates with a server, the server verifies the credentials and generates both an access token and a refresh token. The access token is then provided to the client application, which includes it in each subsequent request to access protected resources on the server.</p>
                    </div>
                </div>
                <div className="card w-96 bg-slate-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p> SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems that differ in their data models, query languages, and usage scenarios. Here's a comparison between SQL and NoSQL databases: <br /><br />
                            Data Model:
                            SQL databases use a structured, tabular data model where data is organized into tables with predefined schemas. Each table consists of rows and columns, and relationships between tables are established using foreign keys. SQL databases enforce data consistency and integrity through ACID (Atomicity, Consistency, Isolation, Durability) transactions. <br /><br />
                            Query Language:
                            SQL databases use the SQL query language, which is a standardized language for defining, manipulating, and retrieving data. SQL provides a declarative approach, where you specify what data you want rather than how to retrieve it. SQL supports powerful querying capabilities, including joins, aggregations, and complex filtering. <br /><br />
                            Scalability and Performance:
                            SQL databases excel in handling structured data and complex queries. They are well-suited for applications that require strong data consistency, integrity, and complex transactions. SQL databases typically scale vertically by adding more resources to a single server. <br /><br />
                            Schema Flexibility:
                            SQL databases enforce a rigid schema, meaning the structure of the data must conform to a predefined schema. Modifying the schema or adding new fields to a table can be cumbersome and may require altering existing data.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-around mt-5'>
                <div className="card w-96 bg-slate-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is express js? What is Nest JS ?</h2>
                        <p>Express.js and NestJS are both web application frameworks used to build server-side applications, but they differ in their design philosophies and feature sets. Here's an overview of each:
                            <br /><br />
                            Express.js:
                            Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and unopinionated layer on top of Node.js's HTTP module, allowing developers to create web servers and build APIs quickly. Express.js focuses on simplicity, giving developers the freedom to structure their applications as they see fit.
                            <br /><br />
                            NestJS:
                            NestJS is a progressive and opinionated Node.js framework for building efficient, scalable, and maintainable server-side applications. It is heavily inspired by Angular's architecture and adopts many of its concepts, such as modules, controllers, and dependency injection. NestJS aims to provide a robust framework that promotes code organization and scalability.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-slate-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                        <p> The MongoDB aggregate method is a powerful feature that allows for advanced data processing and analysis within the MongoDB database. It provides a flexible framework for performing complex data manipulations, transformations, and aggregations.

                            When using the aggregate method, you construct a pipeline that consists of multiple stages. Each stage represents a specific operation or transformation applied to the input documents. The output of one stage serves as the input for the next stage, allowing for a series of data processing steps. <br /><br />
                            Pipeline Stages:
                            A pipeline typically starts with a $match stage to filter and select specific documents from a collection based on certain criteria. Subsequent stages can include $group for grouping and summarizing data, $sort for sorting documents, $project for shaping the output, and many other stages to perform various operations. <br /><br />
                            Operators:
                            Within each stage, MongoDB provides a wide range of operators that define the specific operations to be performed. These operators include arithmetic operators, logical operators, comparison operators, array operators, and many more. They allow you to manipulate and transform the data in various ways to meet your requirements. <br /><br />
                            Aggregation Framework:
                            The aggregate method utilizes MongoDB's Aggregation Framework, which is a set of tools and operators designed for data aggregation and analysis. It supports various operations such as grouping, filtering, sorting, joining, and computing aggregations (e.g., sums, averages, counts) across multiple documents.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;