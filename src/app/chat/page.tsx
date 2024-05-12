"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

function Chat() {
  const [keywords, setKeywords] = useState("");
  const [question, setQuestion] = useState("");
  const [formattedKeywords, setFormattedKeywords] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const handleKeywordChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setKeywords(e.target.value);
  };

  const handleKeywordsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parts = keywords.split(",").map((part) => part.trim());
    const formattedParts = parts.slice(0, 4);
    while (formattedParts.length < 4) {
      formattedParts.push("");
    }
    setFormattedKeywords(formattedParts); // Update state
  };

  // Trigger API call after formattedKeywords are updated
  useEffect(() => {
    if (formattedKeywords.length >= 4) {
      generateKeywordsAnswer();
    }
  }, [formattedKeywords]); // Watch for changes in formattedKeywords

  async function generateKeywordsAnswer() {
    setGeneratingAnswer(true);
    const query = `Can you find me a ${formattedKeywords[0]} route from ${formattedKeywords[2]} to ${formattedKeywords[3]} with ${formattedKeywords[1]} food on the way`;
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDjCo0EBvafAYIeGhUrgzzSmNiTcAvfceA`,
        method: "post",
        data: { contents: [{ parts: [{ text: query }] }] },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    } finally {
      setGeneratingAnswer(false);
    }
  }

  async function generateAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneratingAnswer(true);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDjCo0EBvafAYIeGhUrgzzSmNiTcAvfceA`,
        method: "post",
        data: { contents: [{ parts: [{ text: question }] }] },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    } finally {
      setGeneratingAnswer(false);
    }
  }

  return (
    <>
      <div className="bg-black h-screen p-3">
        <Navbar />
        <div
          className="flex"
          style={{
            marginTop: "20px",
            // marginLeft: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="w-full md:w-2/3 text-center rounded py-2"
            style={{
              background: "linear-gradient(to right, #17acff, #ff68f0)",
              margin: "auto",
              maxWidth: "500px",
              maxHeight: "400px",
              width: "100%",
            }}
          >
            <form onSubmit={handleKeywordsSubmit}>
              <h1
                style={{ fontWeight: "800" }}
                className="text-3xl text-center text-white description1"
              >
                Enter Keywords
              </h1>
              <h3 className="text-xl text-center text-gray description1">
                Example: Safe,Halal,Marina,Golden Gate Bridge
              </h3>
              <div
                style={{
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                <textarea
                  required
                  className="border rounded my-2 p-3"
                  style={{ width: "50%", height: "10%" }} // Styles for the textarea
                  value={keywords}
                  onChange={handleKeywordChange}
                  placeholder="Your preference"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
                disabled={generatingAnswer}
              >
                Search keywords
              </button>
              <button
                type="submit"
                className="bg-purple-700 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
                disabled={generatingAnswer}
                style={{ marginLeft: "10px" }}
              >
                View Map
              </button>
            </form>
            <div className="w-full text-center rounded bg-gray-50 my-1">
              {/* <p
                className="description1"
                style={{
                  background: "linear-gradient(to left, #17acff, #ff68f0)",
                  color: "black",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                {answer}
              </p> */}
            </div>
          </div>
        </div>

        <div
          className="flex"
          style={{ marginTop: "100px", marginLeft: "320px" }}
        >
          <div
            className="w-full md:w-2/3 text-center rounded py-2"
            style={{ background: "linear-gradient(to left, #17acff, #ff68f0)" }}
          >
            <form onSubmit={generateAnswer}>
              <a
                href="https://github.com/Vishesh-Pandey/chat-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  style={{ fontWeight: "800" }}
                  className="text-3xl text-center text-white description1"
                >
                  Chat AI
                </h1>
              </a>
              <textarea
                required
                className="border rounded w-11/12 my-2 min-h-fit p-3"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask anything"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-700 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
                disabled={generatingAnswer}
              >
                Generate answer
              </button>
            </form>
            <div className="w-full text-center rounded bg-gray-50 my-1">
              <p
                className="description1"
                style={{
                  background: "linear-gradient(to right, #17acff, #ff68f0)",
                  color: "black",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
