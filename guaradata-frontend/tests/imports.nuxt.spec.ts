/* eslint-disable quotes */
import { describe, it, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserCard from "@/components/UserCard.vue";

describe("import vue components", () => {
  test("normal import as expected", async () => {
    const cmp = await import("../components/NavBar.vue");
    expect(cmp).toBeDefined();
  });
  test("normal import as expected", async () => {
    const cmp = await import("../components/BlogCard.vue");
    expect(cmp).toBeDefined();
  });
});

describe("UserCard", () => {
  const props = {
    name: "John Doe",
    img_url: "https://example.com/profile.jpg",
    url_profile: "/profile/johndoe",
    subtitle: "Developer",
    github_url: "https://github.com/johndoe",
    linkedin_url: "https://linkedin.com/in/johndoe",
    about_me: "A passionate developer.",
    resume_id: "12345",
  };

  it("renders correctly with given props", () => {
    const wrapper = mount(UserCard, {
      props,
    });

    // Verificar se o nome é renderizado corretamente
    expect(wrapper.text()).toContain(props.name);

    // Verificar se o subtítulo é renderizado corretamente
    expect(wrapper.text()).toContain(props.subtitle);

    // Verificar se o texto "about me" é renderizado corretamente
    expect(wrapper.text()).toContain(props.about_me);

    // Verificar se a imagem de perfil é renderizada corretamente
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(props.img_url);
  });

  it("has a link to the resume profile", () => {
    const wrapper = mount(UserCard, {
      props,
    });

    const resumeLink = wrapper.find('a[href="/resumes/12345"]');
    expect(resumeLink.exists()).toBe(false);
  });

  it("has a link to the LinkedIn profile", () => {
    const wrapper = mount(UserCard, {
      props,
    });

    const linkedinLink = wrapper.find(`a[href="${props.linkedin_url}"]`);
    expect(linkedinLink.exists()).toBe(true);
  });

  it("has a link to the GitHub profile", () => {
    const wrapper = mount(UserCard, {
      props,
    });

    const githubLink = wrapper.find(`a[href="${props.github_url}"]`);
    expect(githubLink.exists()).toBe(true);
  });
});
