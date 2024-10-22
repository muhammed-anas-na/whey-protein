// FaqSection.jsx
"use client"

import { Copy } from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        question: "What is whey protein?",
        answer: "Whey protein is a high-quality protein derived from milk during the cheese-making process. It's rich in essential amino acids and is quickly absorbed by the body."
    },
    {
        question: "What are the benefits of whey protein?",
        answer: "Whey protein helps build muscle, supports recovery after workouts, and can aid in weight loss by increasing protein intake and promoting satiety."
    },
    {
        question: "How much whey protein should I take daily?",
        answer: "The recommended amount varies depending on your fitness goals, but most people take between 20-30 grams per serving, typically after a workout or as a meal supplement."
    },]

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-white text-black min-h-screen flex flex-col items-center mt-20">
                <div className="w-full max-w-3xl px-6 py-12">
                    {/* Header Section */}
                    <h1 className="text-2xl md:text-7xl font-bold text-center mb-4">
                        Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">questions</span>
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Do you need some help with something or do you have questions on some features?
                    </p>
                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left py-4 text-lg font-medium flex justify-between items-center"
                                >
                                    {item.question}
                                    <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="py-2 text-gray-600">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 text-center">
                        <p className="text-lg font-medium">Have any other questions?</p>
                        <p className="text-gray-600 mb-2">
                            Don’t hesitate to send us an email with your enquiry or statement at:
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-gray-500 font-medium">example@gmail.com</span>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm flex items-center gap-2"
                            >
                                copy <Copy className='w-3 h-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FaqSection;