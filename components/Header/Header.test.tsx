import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("should renders the Header components", () => {
    render(<Header />);

    const btnLogo = screen.getByRole("button", { name: /logo/i });
    const btnSignUp = screen.getByRole("button", { name: /join now/i });
    const btnSignIn = screen.getByRole("button", { name: /sign in/i });
    const btnMovies = screen.getByRole("button", { name: /movies/i });
    const btnTvShows = screen.getByRole("button", { name: /tv shows/i });
    const btnPeople = screen.getByRole("button", { name: /people/i });
    const btnPopular = screen.queryByRole("button", { name: /popular/i });
    const btnNowPlaying = screen.queryByRole("button", {
      name: /now playing/i,
    });
    const btnUpcoming = screen.queryByRole("button", { name: /upcoming/i });
    const btnToprated = screen.queryByRole("button", { name: /top rated/i });

    expect(btnLogo).toBeInTheDocument();
    expect(btnSignUp).toBeInTheDocument();
    expect(btnSignIn).toBeInTheDocument();
    expect(btnMovies).toBeInTheDocument();
    expect(btnTvShows).toBeInTheDocument();
    expect(btnPeople).toBeInTheDocument();
    expect(btnPopular).not.toBeInTheDocument();
    expect(btnNowPlaying).not.toBeInTheDocument();
    expect(btnUpcoming).not.toBeInTheDocument();
    expect(btnToprated).not.toBeInTheDocument();
  });

  it("should ");
});
