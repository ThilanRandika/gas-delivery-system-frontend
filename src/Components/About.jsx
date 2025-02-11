const About = () => {
    return (
        <>
            {/* Section for Heading and Description */}
            <div className="flex flex-col justify-start items-center pt-10">
                <h1 className="text-4xl font-bold text-center">
                    Why You Choose Us?
                </h1>
                <p className="mt-4 text-lg text-center">
                    When life gives you more than you can handle, let GasByGas make it
                    <br /> easier with our smart gas delivery and payment system.
                </p>
            </div>

            {/* Section for Images and Text in Horizontal Line */}
            <div className="flex justify-center items-center space-x-10">
                <div className="flex flex-col items-center">
                    <img
                        src="/purchas.jpg"
                        alt="Purchase One Touch"
                        className="w-[250px] h-auto"
                    />
                    <p className="mt-4 text-center text-3xl mb-4">Purchase One Touch</p>
                    <p className="mt-4 text-center text-lg">
                        Get a quick overview of all your transactions <br /> in our easy-to-use GasByGas in one touch.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="/transaction.jpg"
                        alt="Free Transactions"
                        className="w-[250px] h-auto"
                    />
                    <p className="mt-4 text-center text-3xl mb-4">Free Transactions</p>
                    <p className="mt-4 text-center text-lg">
                        Get a quick overview of all your transactions <br /> in our easy-to-use GasByGas in one touch.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="/Private.jpg"
                        alt="Private and Secure"
                        className="w-[200px] h-auto"
                    />
                    <p className="mt-4 text-center text-3xl mb-4">Private and Secure</p>
                    <p className="mt-4 text-center text-lg">
                        None of your personal data is ever collected or stored <br /> in our GasByGas. Your transaction history is private.
                    </p>
                </div>
            </div>

            {/* Section for "Start Now With 3 Steps" with added margin */}
            <div className="flex flex-col justify-start items-center pt-10 mt-12">
                <h1 className="text-4xl font-bold text-center">
                    Start Now With 3 Steps
                </h1>
                <p className="mt-4 text-lg text-center">
                    When life gives you more than you can handle, let GasByGas make it
                    <br /> easier with our smart gas delivery and payment system.
                </p>
            </div>

            {/* Section for Home1 Image and Steps */}
            <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-10">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="/Home1.png"
                            alt="Gas Delivery"
                            className="w-[500px] h-auto transform translate-x-4"
                        />
                    </div>

                    {/* Steps Section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center">
                                1
                            </div>
                            <div className="text-left">
                            <p className="text-2xl">Step 1:  Create Your Account </p>
                            <p className="mt-4 text-left">
                            Signing up for your own GasByGas account is easy and free. <br />
                            Just connect with your phone or Gmail instantly
                            </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center">
                                2
                            </div>
                            <div className="text-left">
                            <p className="text-2xl">Step 2:  Link Your Cards</p>
                            <p className="mt-4 text-left">
                                Link your preferred credit, debit, or prepaid cards to your <br />
                                GasByGas account.
                            </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center">
                                3
                            </div>
                            <div className="text-left">
                            <p className="text-2xl">Step 3:  All Done</p>
                            <p className="mt-4 text-left">
                                That's all done. Now you can explore any apps or websites that are <br />
                                our partners and make transactions with them.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
