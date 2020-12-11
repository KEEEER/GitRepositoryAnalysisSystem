package domain;

import java.util.UUID;

public class GitRepository {
    private String id;
    private String name;
    private String url;

    public GitRepository(String name, String url) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.url = url;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

}
