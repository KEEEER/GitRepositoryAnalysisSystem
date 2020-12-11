package usecase.gitrepository;

public interface CreateGitRepositoryInput {
    void setName(String name);
    String getName();

    void setOwner(String owner);
    String getOwner();

    void setUrl(String url);
    String getUrl();



}
