"use client";

import type React from "react";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Calendar, Clock, MapPin, ExternalLink, Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";

export default function Home() {
    // Countdown timer logic
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: false,
    });

    useEffect(() => {
        // Set the event date (May 21, 2025, 2:30 PM)
        const eventDate = new Date("2025-05-21T14:30:00");

        const updateCountdown = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference <= 0) {
                // Event has started
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0, finished: true});
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds, finished: false});
        };

        // Update immediately
        updateCountdown();
        // Then update every second
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    // Form handling
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     institution: "",
    //     questions: "",
    // });
    //
    // const [isSubmitted, setIsSubmitted] = useState(false);
    //
    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // In a real application, you would send this data to your backend
    //     console.log("Form submitted:", formData);
    //     setIsSubmitted(true);
    //     // Reset form
    //     setFormData({
    //         name: "",
    //         email: "",
    //         institution: "",
    //         questions: "",
    //     });
    // };

    const googleDateFormat = (date: Date) => {
        return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };

    const addToCalendar = () => {
        const title = "Computers Have Feelings Too", startDateTime = new Date("2025-05-21T14:30:00"),
            endDateTime = new Date("2025-05-21T16:00:00"),
            description = "Explore how machines can sense, analyze, and express emotions with Dr. Peter Robinson from Cambridge University. This exclusive talk examines the intersection of psychology and technology that's enabling computers to understand human emotions, revolutionizing how we interact with machines and opening new possibilities in education, commerce, therapy, and everyday life."
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${googleDateFormat(startDateTime)}/${googleDateFormat(endDateTime)}&details=${description}&location=${location}&sf=true&output=xml`;
        window.open(calendarUrl, '_blank');

    }
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link
                        href={"https://acmvit.in"}
                        target="_blank"
                        className="flex items-center space-x-2"
                    >
                        <Image
                            src="/logos/black.svg?height=40&width=40"
                            alt="ACM-VIT Logo"
                            width={40}
                            height={40}
                        />
                        <span className="font-semibold text-gray-900">
                            ACM-VIT
                        </span>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="#about"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About Event
                        </Link>
                        <Link
                            href="#speaker"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About Speaker
                        </Link>
                        <Link
                            href="#details"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Event Details
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Computers Have Feelings Too
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Exploring the fascinating world of Human-Computer
                        Interaction with Dr. Peter Robinson
                    </p>

                    {/* Countdown Timer */}
                    {!timeLeft.finished ? <div className="max-w-3xl mx-auto mb-12">
                        <div className="flex items-center justify-between md:justify-around mb-6">
                            {/*<div className="bg-white py-4 px-6 rounded-lg shadow-sm w-24">*/}
                            {/*    <div className="text-3xl md:text-5xl font-bold text-gray-900">*/}
                            {/*        {timeLeft.days}*/}
                            {/*    </div>*/}
                            {/*    <div className="text-sm text-gray-500 mt-1">*/}
                            {/*        Days*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="bg-white p-4 rounded-lg shadow-sm w-24">
                                <div className="text-3xl md:text-5xl font-bold text-gray-900">
                                    {timeLeft.hours}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    Hours
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm w-24">
                                <div className="text-3xl md:text-5xl font-bold text-gray-900">
                                    {timeLeft.minutes}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    Minutes
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm w-24">
                                <div className="text-3xl md:text-5xl font-bold text-gray-900">
                                    {timeLeft.seconds}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    Seconds
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-around mb-6 flex-wrap">
                            <Button variant="outline" onClick={addToCalendar} className="border-gray-300 text-gray-700">
                                Add to Calendar
                            </Button>
                        </div>
                    </div> : <div className="w-full flex items-center justify-center">
                        <iframe
                            src="https://teams.microsoft.com/convene/townhall?eventId=f8529fee-9fe8-452d-8afd-b35bdc18e57a@d4963ce2-af94-4122-95a9-644e8b01624d&sessionId=16dce9b7-14bb-4a90-b9c0-16545cf9de73"
                            width="1280" height="720" className="border-none self-center text-center"
                            allowFullScreen allow="autoplay; camera; microphone"></iframe>
                    </div>
                    }
                </div>
            </section>

            {/* About the Event Section */}
            <section id="about" className="py-20 px-4 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            About the Event
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p>
                                Join us for an enlightening session on
                                Human-Computer Interaction (HCI) titled
                                "Computers Have Feelings Too." This event will
                                explore the fascinating intersection of computer
                                science, psychology, and design that shapes how
                                we interact with technology.
                            </p>
                            <p>
                                Human-Computer Interaction is a
                                multidisciplinary field that focuses on the
                                design of computer technology and the
                                interaction between humans and computers. It's
                                about understanding how people interact with
                                computers and designing technologies that let
                                humans interact with computers in novel ways.
                            </p>
                            <p>
                                Dr. Peter Robinson, a leading researcher in
                                affective computing and HCI, will discuss how
                                computers can be designed to recognize,
                                interpret, and even simulate human emotions.
                                This groundbreaking area of research is changing
                                how we think about technology and its role in
                                our lives.
                            </p>
                        </div>

                        <div className="mt-12 grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        Affective Computing
                                    </h3>
                                    <p className="text-gray-600">
                                        Explore how computers can recognize and
                                        respond to human emotions, creating more
                                        intuitive and responsive interfaces.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        User Experience Design
                                    </h3>
                                    <p className="text-gray-600">
                                        Learn about the principles and
                                        methodologies that create meaningful and
                                        relevant experiences for users.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        Future of HCI
                                    </h3>
                                    <p className="text-gray-600">
                                        Discover emerging trends and
                                        technologies that will shape the future
                                        of human-computer interaction.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speaker Section */}
            <section id="speaker" className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        About the Speaker
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src="/peter-robinson.jpg?height=192&width=192"
                                    alt="Dr. Peter Robinson"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Dr. Peter Robinson
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Director of Research (Computer Technology),
                                    University of Cambridge
                                </p>
                                <div className="prose prose-lg max-w-none">
                                    <p>
                                        Dr. Peter Robinson is a Professor of
                                        Computer Technology at the University of
                                        Cambridge, where he leads research in
                                        the general area of applied computer
                                        science.
                                    </p>
                                    <p>
                                        His research interests include
                                        human-computer interaction, computer
                                        graphics, and system design. He has a
                                        particular focus on the use of video and
                                        other sensors to detect and recognize
                                        people's movements and emotions.
                                    </p>
                                    <p>
                                        Dr. Robinson is a pioneer in the field
                                        of affective computing, which aims to
                                        create systems that can recognize,
                                        interpret, and process human emotions.
                                        His work has been instrumental in
                                        developing technologies that make
                                        computers more responsive to human needs
                                        and behaviors.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link
                                        href="https://www.cst.cam.ac.uk/people/pr10"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-900 hover:text-gray-700"
                                    >
                                        University Profile
                                        <ExternalLink className="ml-1 h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Details Section */}
            <section id="details" className="py-20 px-4 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Event Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <Calendar className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Date
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            May 21, 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Time
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            2:30 PM - 4:00 PM (IST)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Venue
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            Online conference - Zoom
                                        </p>
                                        <p className="text-gray-600 mt-1">
                                            Also available via live stream on our{" "}
                                            <a
                                                href="https://www.youtube.com/channel/UCaV36jEoK5SI59ly0Mxa_ZA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline font-medium">
                                                  YouTube channel
                                            </a>. Link will be shared soon.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Event Schedule
                            </h3>
                            <div className="space-y-4">
                                <div className="flex">
                                    <div className="w-24 flex-shrink-0 text-gray-500">
                                        2:30 PM
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Welcome and Introduction
                                        </span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 flex-shrink-0 text-gray-500">
                                        2:45 PM
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Keynote: "Computers Have Feelings
                                            Too"
                                        </span>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Dr. Peter Robinson
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 flex-shrink-0 text-gray-500">
                                        3:30 PM
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Q&A Session
                                        </span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 flex-shrink-0 text-gray-500">
                                        3:50 PM
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Closing Remarks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            {/* <section id="register" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register for the Event</h2>

            {isSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thank You for Registering!</h3>
                <p className="text-gray-600 mb-6">
                  Your registration has been received. We'll send you a confirmation email with more details soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-gray-300 text-gray-700"
                >
                  Register Another Person
                </Button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution">Institution/Organization</Label>
                    <Input
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="questions">Questions for the Speaker (Optional)</Label>
                    <Textarea
                      id="questions"
                      name="questions"
                      value={formData.questions}
                      onChange={handleChange}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Register
                  </Button>
                </form>
              </div>
            )} */}
            {/* 
            
          </div>
        </div>
      </section> */}

            <div className="text-center text-gray-600">
                <p>
                    For any queries, please contact{" "}
                    <Link
                        href="mailto:acm@vit.ac.in"
                        className="text-gray-900 hover:underline"
                        target="_blank"
                    >
                        acm@vit.ac.in
                    </Link>
                </p>
            </div>

            {/* HCI Information Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Understanding HCI
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <p>
                                Human-Computer Interaction (HCI) is a
                                multidisciplinary field that studies the design
                                and use of computer technology, focusing on the
                                interfaces between people and computers. It
                                encompasses cognitive science, human factors
                                engineering, computer science, and design.
                            </p>

                            <h3>Key Aspects of HCI:</h3>

                            <ul>
                                <li>
                                    <strong>User Interface Design:</strong>{" "}
                                    Creating intuitive, efficient, and enjoyable
                                    interfaces that enhance user experience.
                                </li>
                                <li>
                                    <strong>User Experience (UX):</strong>{" "}
                                    Considering all aspects of a user's
                                    interaction with a system, including
                                    usability, accessibility, and emotional
                                    response.
                                </li>
                                <li>
                                    <strong>Affective Computing:</strong>{" "}
                                    Developing systems that can recognize,
                                    interpret, and process human emotions.
                                </li>
                                <li>
                                    <strong>Cognitive Psychology:</strong>{" "}
                                    Understanding how humans perceive, process,
                                    and respond to information.
                                </li>
                                <li>
                                    <strong>Interaction Design:</strong>{" "}
                                    Creating meaningful relationships between
                                    people and the products they use.
                                </li>
                            </ul>

                            <p>
                                The field of HCI has evolved significantly since
                                its inception, moving from simple command-line
                                interfaces to complex, multimodal interactions
                                that can include voice, gesture, and even
                                emotional recognition. Dr. Robinson's work in
                                affective computing represents the cutting edge
                                of this evolution, exploring how computers can
                                understand and respond to human emotions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Image
                                    src="/logos/white.svg?height=40&width=40"
                                    alt="ACM-VIT Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="font-semibold">ACM-VIT</span>
                            </div>
                            <p className="text-gray-400">
                                ACM-VIT is a student chapter of the Association
                                for Computing Machinery at VIT University,
                                dedicated to fostering knowledge and innovation
                                in the field of computer science.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#about"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        About the Event
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#speaker"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Speaker Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#details"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Event Details
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 text-gray-400"/>
                                    <Link
                                        href="mailto:acm@vit.ac.in"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        acm@vit.ac.in
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-gray-400"/>
                                    <span className="text-gray-400">
                                        VIT University, Vellore, Tamil Nadu,
                                        India
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-4 flex space-x-4">
                                <Link
                                    href="https://x.com/ACM_VIT"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank"
                                >
                                    <span className="sr-only">X</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/acmvit/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/14678390"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8 bg-gray-800"/>
                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            © {new Date().getFullYear()} ACM-VIT Student
                            Chapter. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
