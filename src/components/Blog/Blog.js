import React from "react";

export const Blog = () => {
  return (
    <>
      <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--_ZyJgo1K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/r5nog298592rqgj6yj8n.png"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                What is the purpose of React Router?
              </a>
              <p className="text-xs text-slate-800">
                By{" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Ferdous Fardin
                </a>
              </p>
            </div>
            <div className="text-gray-100">
              <p>
                React is one of the most commonly-used frameworks for designing
                webpages. However, it still has its flaws. One of these flaws is
                the lack of a built-in router. Enter React Router! As stated on
                their website, React Router is a collection of navigational
                components that allow you to compose declaratively within your
                application. For example, if you want to create a single-page
                application, but plan to incorporate multiple views, React
                Router will allow you to render those views without the need to
                refresh the entire page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2020/07/10030933/0_Mrs5Yom4N3JY00g2-1.png"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                How does Context API work?
              </a>
              <p className="text-xs text-slate-800">
                By{" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Ferdous Fardin
                </a>
              </p>
            </div>
            <div className="text-gray-100">
              <p>
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on. To use it, React.createContext()
                is all you need. It returns a consumer and a provider. Provider
                is a component that as it's names suggests provides the state to
                its children. It will hold the "store" and be the parent of all
                the components that might need that store. Consumer as it so
                happens is a component that consumes and uses the state.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://i2.wp.com/blog.alexdevero.com/wp-content/uploads/2021/05/10-05-21-reacts-useref-hook-what-it-is-and-how-to-use-it-blog.jpg?w=1024&ssl=1"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                What is useRef()?
              </a>
              <p className="text-xs text-slate-800">
                By{" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Ferdous Fardin
                </a>
              </p>
            </div>
            <div className="text-gray-100">
              <p>
                The useRef hook may not be as popular as other hooks such as
                useState, useEffect and useReducer. Due to this, it may not be
                clear what is the purpose of this hook. Nonetheless, useRef hook
                can be very useful in certain situations. The ref, in useRef, is
                a shorthand for “reference”. What this hook does is it allows
                you to store data, and persist them across renders. What’s even
                more interesting and important, this hook does this without
                causing the component to re-render. This means that when you
                update the value stored by useRef, React will not re-render your
                component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
