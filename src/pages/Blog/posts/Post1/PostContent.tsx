import {
  Box,
  ListItem,
  Text,
  UnorderedList,
  Code,
  OrderedList,
  Link,
  Heading,
} from "@chakra-ui/react";

import { CodeBlock, atomOneDark } from "react-code-blocks";

const snippet1 = `app.get("/properties", async (req, res, next) => {
  try {
    // Check if property IDs are specified in the query
    const propertyIds = req.query.id;

    if (propertyIds) {
      // Convert propertyIds to an array if it's a single value
      const idArray = Array.isArray(propertyIds) ? propertyIds : [propertyIds];

      // Fetch properties for the specified IDs
      const properties = await Promise.all(
        idArray.map(async (id) => {
          const result = await this.model.getPropertyInstance(id);

          if (result instanceof Error) {
            // Handle errors for individual property requests
            throw new Error(
              \`Error getting property with ID \${id}: \${result.message}\`
            );
          }

          // Return the property if it exists, or null otherwise
          return result.rows.length > 0 ? result.rows[0] : null;
        })
      );

      return res.status(200).json(properties);
    }
});`;

const snippet2 = `app.get("/properties", async (req, res, next) => {
  try {
    // Check if property IDs are specified in the query
    const propertyIds = req.query.id;

    if (propertyIds) {
      // Convert propertyIds to an array if it's a single value
      const idArray = Array.isArray(propertyIds) ? propertyIds : [propertyIds];

      // Fetch properties for the specified IDs
      const properties = await Promise.all(
        idArray.map(async (id) => {
          const result = await this.model.getPropertyInstance(id);

          if (result instanceof Error) {
            // Handle errors for individual property requests
            throw new Error(
              \`Error getting property with ID \${id}: \${result.message}\`
            );
          }

          // Return the property if it exists, or null otherwise
          return result.rows.length > 0 ? result.rows[0] : null;
        })
      );

      return res.status(200).json(properties);
    }

    // If no specific property IDs are requested, get all properties
    const { _start, _end } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || Infinity;

    const allProperties = await this.model.getAllProperties();

    if (allProperties instanceof Error) {
      // Handle errors for fetching all properties
      throw new Error(\`Error getting all properties: \${allProperties.message}\`);
    }

    // Apply pagination
    const paginatedProperties = allProperties.rows.slice(start, end);

    // Return paginated properties
    res.status(200).json(paginatedProperties);
  } catch (error) {
    // Handle errors, you may want to check for specific error types here
    next(error);
  }
});`;

const snippet3 = `SELECT * FROM properties 
ORDER BY id
LIMIT {end - start} OFFSET {start};`;

const snippet4 = `export const async getAllProperties = (start, end) => {
	try {
    // Execute SQL query with pagination
    const query = \`
      SELECT *
      FROM properties
      ORDER BY id
      LIMIT $1 OFFSET $2;
    \`;
    const values = [end - start, start];
    const result = await pool.query(query, values);

    // Return paginated properties
    return result.rows;
  } catch (error) {
    // Handle errors for fetching paginated properties
    throw new Error(\`Error fetching paginated properties from the database: \${error.message}\`);
  }`;

const snippet5 = `app.get("/properties", async (req, res, next) => {
    try {
      // Check if property IDs are specified in the query
      const propertyIds = req.query.id;
  
      if (propertyIds) {
        // Convert propertyIds to an array if it's a single value
        const idArray = Array.isArray(propertyIds) ? propertyIds : [propertyIds];
  
        // Fetch properties for the specified IDs
        const properties = await Promise.all(
          idArray.map(async (id) => {
            const result = await this.model.getPropertyInstance(id);
  
            if (result instanceof Error) {
              // Handle errors for individual property requests
              throw new Error(
                \`Error getting property with ID \${id}: \${result.message}\`
              );
            }
  
            // Return the property if it exists, or null otherwise
            return result.rows.length > 0 ? result.rows[0] : null;
          })
        );
  
        return res.status(200).json(properties);
      }
  
      // If no specific property IDs are requested, get all properties
      const { _start, _end } = req.query;
      const start = parseInt(_start) || 0;
      const end = parseInt(_end) || Infinity;
  
      // Fetch paginated properties from the model
      const paginatedProperties = await this.model.getAllProperties(start, end);
  
      if (paginatedProperties instanceof Error) {
        // Handle errors for fetching all properties
        throw new Error(
          \`Error getting all properties: \${paginatedProperties.message}\`
        );
      }
  
      // Return paginated properties
      res.status(200).json(paginatedProperties);
    } catch (error) {
      // Handle errors, you may want to check for specific error types here
      next(error);
    }
  });`;

const PostContent = () => {
  return (
    <Box>
      <div
        id="dummy_anchor1"
        style={{ position: "absolute", top: "-65px", left: 0 }}
      ></div>
      <Text lineHeight={"1.75"} fontSize={"1.2rem"} mt={"30px"}>
        In this article I showcase how to implement Filtration and Pagination, I
        then discuss various techniques of implementing pagination, simple
        pagination using JavaScript's native `slice` method, when to use it, and
        what security and memory considerations it poses, then I showcase an
        alternative pagination technique that scales well and is more suited for
        real applications with larger data sets however more complex and depends
        on the type of Database service and ORM you use.
        <br />
        <br />
        when performing a GET request of some sort, you need to be able to be
        able to filter according to <Code>id</Code> and perform some pagination:
        <UnorderedList>
          <ListItem>
            we have <Code>/properties</Code> as our endpoint, it gets all
            properties without any filtration.
          </ListItem>
          <ListItem>
            <Code>/properties?id=1&id=2&id=3</Code> expects to return properties
            with ids 1, 2 and 3. (filtration)
          </ListItem>
          <ListItem>
            <Code>/properties?_start=0&_end=3</Code> expects to return the first
            3 properties (pagination).
          </ListItem>
        </UnorderedList>
        <br />
        Below is an example where we make a filtered request to `/properties`
        and specify the IDs for the exact properties we want.
        <br />
        <br />
        The following URI paths gives you an idea of what the GET requests look
        like:
        <OrderedList>
          <ListItem>
            <Code>GET /properties?id=1</Code>
          </ListItem>
          <ListItem>
            <Code>GET /properties?id=1&id=2</Code>
          </ListItem>
          <ListItem>
            <Code>GET /properties?id=1&id=2&id=3</Code> and so on ...
          </ListItem>
        </OrderedList>
        <br />
        <CodeBlock
          text={snippet1}
          language="javascript"
          showLineNumbers={true}
          theme={atomOneDark}
        />
        <br />
        of course the above is not a complete GET service as it doesn't handle
        if the request doesn't specify the IDs in the query we will get to that
        next.
        <br />
        <br />
        we start by checking if any property IDs are present in the query, then
        we invoke the specific model method to handle the fetching{" "}
        <Code>await this.model.getPropertyInstance(id)</Code>
        <br />
        <br />a similar logic could also be implemented for other sorts of
        filtration, for example instead of by IDs it could be by location{" "}
        <Code>GET /properties?location=area1&location=area2</Code> or amenity{" "}
        <Code>GET /properties?amenity=gym&amenity=parking</Code>
        <br />
        <br />
        Now we handle the case where no IDs are specified but also we apply
        pagination to it, there is one question to answer before writing a GET
        service that does some sort of pagination
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>
          Q. How large is the dataset we are fetching?
        </span>
        <br />
        <br />
        For smaller to moderate size datasets I prefer to keep it simple by
        fetching all properties then use <Code>slice</Code> method to cut it
        down to the required data and let Node JS garbage collector handle
        cleaning the memory from the unused data. This is for simplicity, as it
        is very easy and quick to write model methods that get all data and the
        specific data without much testing and performance considerations which
        helps saves time especially when making Minimum Viable Products (MVPs)
        where I need to deliver the prototype quickly. Below is the
        implementation of pagination using JavaScript native <Code>slice</Code>{" "}
        method.
        <br />
        <CodeBlock
          text={snippet2}
          language="javascript"
          showLineNumbers={true}
          theme={atomOneDark}
        />
        <br />
        However in real applications the above code does not scale very well as
        it poses potential memory issues with large data sets as we are fetching
        and storing all property values in memory, now if the data set is larger
        than our server memory, it might even introduce security risks such as
        buffer overflow which can lead to unauthorized execution of foreign code
        in our server.
        <br />
        <br />
        instead, for real applications we will have to write alternative
        pagination techniques directly to our database, for this it would depend
        on the type of database you're using and the Object Relational Mapper
        (ORM).
        <br />
        <br />
        below I give a basic SQL using `LIMIT` and `OFFSET` example of how
        pagination could be implemented
        <br />
        <CodeBlock
          text={snippet3}
          language="sql"
          showLineNumbers={true}
          theme={atomOneDark}
        />
        <br />
        the above code or the alternative according to your database or ORM
        would be implemented in the model and we would later use it in our
        service
        <br />
        <br />
        Below I showcase how it would be written in the updated model method{" "}
        <Code>getAllProperties</Code>, in the SQL code we would replace the
        values of <Code>start</Code> and <Code>end</Code> with <Code>$1</Code>{" "}
        and <Code>$2</Code> or what ever syntax according to your database
        library, this is to prevent SQL Injection attacks.
        <CodeBlock
          text={snippet4}
          language="javascript"
          showLineNumbers={true}
          theme={atomOneDark}
        />
        <br />
        and below is the updated GET service:
        <br />
        <CodeBlock
          text={snippet5}
          language="javascript"
          showLineNumbers={true}
          theme={atomOneDark}
        />
        <br />
        Theoretically this should be somewhat ideal, but technically there are
        many considerations to put in mind when considering scaling.
        <br />
        <br />
        for example a consideration we could put is the number of skipped rows
        when fetching a query from a PostgreSQL Database, if we have a very
        large number of skipped rows then <Code></Code>`OFFSET` might not be
        ideal instead a combination of <Code>LIMIT</Code>, <Code>WHERE</Code>{" "}
        and <Code>ORDER BY</Code> is more suitable. a great read on this issue
        is discussed by{" "}
        <span style={{ fontWeight: "bold" }}>Taras Drapalyuk</span> article{" "}
        <Link
          textDecoration={"underline"}
          href="https://hackernoon.com/dont-offset-your-sql-querys-performance"
          target="_blank"
        >
          "Don't OFFSET Your SQL Query's Performance"
        </Link>
        <br />
        <br />
        <Heading size={"lg"}>Conclusion</Heading>
        Throughout this article, we've explored various techniques for
        implementing filtration and pagination. We began by discussing the basic
        concepts and requirements, showcasing examples of URL paths and the
        corresponding GET requests for filtering properties based on IDs and
        implementing pagination, we then delved into the implementation details,
        starting with a straightforward approach using JavaScript's native slice
        method for pagination. While this method is simple and quick to
        implement, we highlighted its limitations, particularly in handling
        large datasets and potential security risks associated with memory
        consumption.
      </Text>
    </Box>
  );
};

export default PostContent;
