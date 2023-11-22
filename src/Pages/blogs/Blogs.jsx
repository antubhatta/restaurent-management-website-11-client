import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="mt-4 lg:mt-20 min-h-screen">
      <Helmet>
        <title>Blog - EatsHub</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <article className="px-5">
      <article>
        <h1 className="text-xl lg:text-2xl font-bold">Q-1: What is One way data binding?</h1>
        <p className="text-sm md:text-base font-medium"><span className="font-bold text-xl">Ans:</span> 
One-way data binding is a programming concept commonly used in web development and user interface frameworks. In a one-way data binding scenario, data is transferred from the data source to the user interface (UI) or view. Changes in the data source are reflected in the UI, but changes in the UI do not affect the data source.</p>
        <p className="text-sm md:text-base font-medium">In simpler terms, one-way data binding ensures that the data flows in a single direction, typically from the data source to the UI. This helps maintain a clear and predictable flow of information, making it easier to manage and update the user interface based on changes in the underlying data.</p>

        <p className="text-sm md:text-base font-medium">let declarations are block-scoped, meaning they are only
          accessible within the block (a block is typically defined by curly braces {}) in which they are declared.
          Variables declared with let are not hoisted in the same way as var. They are hoisted, but they are not
          initialized until their declaration statement is executed.</p>

        <p className="text-sm md:text-base font-medium">It contrasts with two-way data binding, where changes in the UI can also update the data source, creating a bidirectional flow of data. One-way data binding is often considered more straightforward and less error-prone in certain situations, as it provides a clear and controlled mechanism for updating the UI based on changes in the data.</p>
        <p className="text-sm md:text-base font-medium">It contrasts with two-way data binding, where changes in the UI can also update the data source, creating a bidirectional flow of data. One-way data binding is often considered more straightforward and less error-prone in certain situations, as it provides a clear and controlled mechanism for updating the UI based on changes in the data.</p>
      </article>
      <article>
        <h1 className="text-xl lg:text-2xl font-bold mt-6">Q-2: What is NPM in node.js?</h1>
        <p className="text-sm md:text-base font-medium"><span className="font-bold text-xl">Ans: </span> 
NPM (Node Package Manager) is the default package manager for Node.js, facilitating the installation, sharing, and management of JavaScript packages. It allows developers to easily add and manage dependencies in their projects, streamlining the development process. NPM also provides a central registry for publishing and discovering packages, making it a crucial tool for Node.js developers to efficiently handle project dependencies.</p>
      </article>
      <article>
        <h1 className="text-xl lg:text-2xl font-bold mt-6">Q-3: Different between Mongodb database vs mySQL database.</h1>
        <p className="text-sm md:text-base font-medium"><span className="font-bold text-xl">Ans: </span> MongoDB and MySQL are both popular database management systems but differ in their data models, query languages, and use cases. MongoDB is a NoSQL, document-oriented database, storing data in flexible, JSON-like BSON documents, making it well-suited for unstructured or semi-structured data. MySQL, on the other hand, is a relational database system, using tables with predefined schemas to store data. MongoDB is often chosen for scalability, flexibility, and handling large amounts of data, while MySQL is commonly used in structured, transactional scenarios where data relationships are well-defined.</p>
      </article>
    </article>
      </div>
    </div>
  );
};

export default Blogs;
